import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppSelector, useAppDispatch } from "../store/store";
import { IUser, fetchUsers, setLoggedUser } from "../store/slices/usersSlice";
import userMockedData from "../mock-data/user.json";

import "./Login.css";

interface ILogin {
  onSetIsLoggedIn: () => void;
}

const Login = (props: ILogin) => {
  const { onSetIsLoggedIn } = props;
  const [clickedButton, setClickedButton] = useState("");
  const [loadedUsers, setLoadedUsers] = useState<Array<IUser>>([]);
  const [inputUserName, setInputUserName] = useState<string>("neo");
  const [inputPass, setInputPass] = useState<string>("magestic");
  const users = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ payload: userMockedData }));
  }, [userMockedData]);

  useEffect(() => {
    setLoadedUsers(users);
  }, [users]);

  function fetchDataObj(users: any) {
    try {
      setLoadedUsers(users);
    } catch (err: any) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchDataObj(users);
  }, [fetchDataObj]);

  useEffect(() => {
    console.log("Loaded Users:", loadedUsers);
  }, [loadedUsers]);

  const handlerValidateUser = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    return loadedUsers.find((user) => {
      if (user.user_name == inputUserName) {
        dispatch(setLoggedUser({ isLoggedIn: true }));
        onSetIsLoggedIn();
      } else {
        dispatch(setLoggedUser({ isLoggedIn: false }));
      }
    });
  };

  return (
    <div className="login-box">
      <Form className="p-5 col-example mh-100 form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={inputUserName}
            onChange={(event) => setInputUserName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={inputPass}
            onChange={(event) => setInputPass(event.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="align-items-end"
          onClick={(event) => handlerValidateUser(event)}
          // disabled={inputUserName === "" || inputPass === ""}
        >
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
