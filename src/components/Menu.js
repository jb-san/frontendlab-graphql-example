import React from "react";
import { NavLink } from "react-router-dom";
export default () => {
  return (
    <div className={"indigo-lightest"}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/admin"}>Admin</NavLink>
    </div>
  );
};
