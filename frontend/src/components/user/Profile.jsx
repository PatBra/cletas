import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";

const Profile = () => {
  const { user, loading } = useSelector(state => state.auth);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Perfil de Usuario"} />

          <h2 className="mt-5 ml-5">Perfil Usuario</h2>
          <div className="row justify-content-around mt-5 mb-3 user-info">
            <div className="col-12 col-md-3">
              <figure className="avatar avatar-profile">
                <img
                  className="rounded-circle img-fluid"
                  src={user.avatar.url}
                  alt={user.name}
                />
              </figure>
              <Link
                to="/me/update"
                id="edit_profile"
                className="btn btn-primary btn-block my-5"
              >
                Editar Perfil
              </Link>
            </div>

            <div className="col-12 col-md-5">
              <h4>Nombre</h4>
              <p>{user.name}</p>

              <h4>email</h4>
              <p>{user.email}</p>

              <h4>Suscribirse a novedades?</h4>
              <p>{user.consent ? "DA" : "NU"}</p>

              <h4>Miembro desde el</h4>
              <p>{String(user.createdAt).substring(0, 10)}</p>

              {user.role !== "admin" && (
                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
              Mis Ordenes
                </Link>
              )}

              <Link
                to="/password/update"
                className="btn btn-primary btn-block mt-3"
              >
                Cambio de Password
              </Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
