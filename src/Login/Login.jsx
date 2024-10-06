import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="sectionone">SIGN-IN</button>;
};

export default Login;