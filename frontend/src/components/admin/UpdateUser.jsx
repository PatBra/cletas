import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUser,
  getUserDetails,
  clearErrors,
} from "../../actions/userActions";
import { UPDATE_USER_RESET } from "../../constants/userConstants";

const UpdateUser = ({ history, match }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [consent, setConsent] = useState(false);

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isUpdated } = useSelector(state => state.user);
  const { user } = useSelector(state => state.userDetails);

  const userId = match.params.id;

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Actualizacion de usuario exitosa");

      history.push("/admin/users");

      dispatch({
        type: UPDATE_USER_RESET,
      });
    }
  }, [dispatch, alert, error, history, isUpdated, userId, user]);

  const checkConsent = React.useCallback(() => setConsent(!consent), [
    consent,
    setConsent,
  ]);

  const submitHandler = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("role", role);
    formData.set("consent", consent);

    dispatch(updateUser(user._id, formData));
  };

  return (
    <Fragment>
      <MetaData title={`Actualizar usuario`} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <div className="row wrapper">
            <div className="col-10 col-lg-5">
              <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mt-2 mb-5">Actualizar usuario</h1>

                <div className="form-group">
                  <label htmlFor="name_field">Nombre</label>
                  <input
                    type="name"
                    id="name_field"
                    className="form-control"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role_field">Rol</label>

                  <select
                    id="role_field"
                    className="form-control"
                    name="role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                  >
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </div>

                <div className="form-group-checkbox">
                  <label htmlFor="consent">
                  Quiero recibir un email cuando se añada un nuevo producto
                  </label>
                  <br />
                  <input
                    type="checkbox"
                    id="consent_field"
                    className="form-control-checkbox mt-2"
                    name="consent"
                    defaultChecked={consent}
                    onChange={checkConsent}
                  />
                </div>

                <button
                  type="submit"
                  className="btn update-btn btn-block mt-4 mb-3"
                >
                  ACTUALIZAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
