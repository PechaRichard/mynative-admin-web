import {Link, Outlet} from "react-router-dom"
import React from "react";

export const Global = () => {
  return(
      <div>
          <nav>
              <Link to="/">home</Link>
              <Link to="/metro">metro</Link>
          </nav>
          <Outlet />
      </div>
  )
}