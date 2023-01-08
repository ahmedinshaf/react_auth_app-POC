import { Redirect, Route } from "react-router-dom";

// Redirect user if not authenticated
export const PrivateRoute = (props) => {
  //TODO : check user logged in
  const user = null;

  if (!user) return <Redirect to="/login" />;

  return <Route {...props} />;
};
