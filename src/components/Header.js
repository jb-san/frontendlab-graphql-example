import React from "react";

export default () => {
  return (
    <div>
      <header className=" bg-indigo py-3 mb-8 text-white ">
        <nav className="container mx-auto flex items-center justify-between">
          <NavLink className={"mx-3  no-underline"} to={"/"}>
            <h1 className="App-title text-white font-sans">Micro</h1>
          </NavLink>

          <div className={"text-white no-underline "}>
            <NavLink className={"mx-3 no-underline text-white"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"mx-3 no-underline text-white"} to={"/admin"}>
              Admin
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};
