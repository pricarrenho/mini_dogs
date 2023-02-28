import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </RouteLib>
  );
};
