import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Cookies } from 'react-cookie';
const cookie = new Cookies()

export default function OnlyAllowedNotAuth() {
  const userInCookie = cookie.get("user")
  const location = useLocation();

  if (userInCookie && location.pathname === '/login') {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
}
  