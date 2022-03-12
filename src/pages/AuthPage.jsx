import React from "react";
import Login from "../components/Auth/Login";
import { useAuth } from "../contexts/AuthContext";
import HomePage from "./HomePage";

const AuthPage = () => {
  const { user } = useAuth();
  return <div>{user ? <HomePage /> : <Login />}</div>;
};

export default AuthPage;
