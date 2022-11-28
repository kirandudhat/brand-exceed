import { NavLink } from "react-router-dom";

import "./sidebar.css";

import { useEffect, useState } from "react";
import { getUser } from "../../Utils/common/Common";
import { getBasePath, getPath, navLinks } from "../../Utils/common/routes";
// import 'font-awesome/css/font-awesome.min.css';

const SideBar = () => {
  const [role, setRole] = useState();

  useEffect(() => {
    const userDetails = getUser();

    if (userDetails?.role) {
      setRole(userDetails.role);
    } else {
      setRole(0);
    }
  }, []);

  const roleLinks = () => {
    return navLinks.filter((link) => link.permission.includes(role));
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarmenu">
            <ul className="sidebarlist">
              {role !== 0
                ? roleLinks().map((route) => (
                  <li className="sidebarlistItem" key={route.to}>
                      {console.log("route", route, window.location.pathname, window.location.pathname.includes(route.to))}
                      <NavLink
                        to={getPath(route.to, getBasePath(role))}
                        className={route.to !== '/' && window.location.pathname.includes(route.to)  ? "link active" : "link"}
                        exact
                        // activeClassName={}
                      >
                        <span className="sidebarIcon">{route.icon}</span>

                        {route.name}
                      </NavLink>
                    </li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
