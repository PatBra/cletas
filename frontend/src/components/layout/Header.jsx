import React, { Fragment } from "react";
import { Route, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

import Search from "./Search";

import "../../App.css";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector(state => state.auth);
  const { cartItems } = useSelector(state => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Cierre de sesión exitoso");
  };

  return (
    <Fragment>
      <nav className="navbar row bg-secondary">
        <div className="col-12 col-md-3">
          <div className="navbar-brand">
            <Link to="/">
            <i class="fa-solid fa-bicycle fa-beat text-white"></i>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
            <span id="product" className="ml-3 text-white">
              Home
            </span>
            </Link>
            <Link to="/product" style={{ textDecoration: "none" }}>
            <span id="product" className="ml-3 text-white">
              Productos
            </span>
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Route render={({ history }) => <Search history={history} />} />
        </div>

        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span id="cart" className="ml-3">
            <i className="fa-solid fa-cart-shopping" style={{color: "#ffffff"}}></i>
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>

          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="#!"
                className="btn dropdown-toggle text-white mr-4 btn"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                {user && user.role === "admin" && (
                  <Link className="dropdown-item" to="/dashboard">
                    Panel de control
                  </Link>
                )}
                <Link className="dropdown-item" to="/orders/me">
                  Pedidos
                </Link>
                <Link className="dropdown-item" to="/me">
                  Perfil
                </Link>
                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Cerrar sesión
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/login" className="btn ml-4" id="login_btn">
                Acceder
              </Link>
            )
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
