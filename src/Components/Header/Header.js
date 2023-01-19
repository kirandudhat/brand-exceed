import logo from "../../assest/img/mainLogo.svg";

import "./Header.css";
import { getUser } from "../../Utils/common/Common";
import History from "../../Utils/History/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import Model from "../Model/Model";

const Header = () => {
  const [role, setRole] = useState();
  const userDetails = getUser();
  useEffect(() => {
    const userDetails = getUser();

    if (userDetails?.role) {
      setRole(userDetails.role);
    } else {
      setRole(0);
    }
  }, []);

  const handleProfileVisit = () => {
    History.push(`/profile/${userDetails?.userId}`);
  };

  return (
    <>
      <div className="navbar">
        <div className="header-logo">
        <img src={logo} className="main-logo" alt="logo" />
        </div>
        <div className="navbarWrapper">
          {/* {role === 2 ? (
            <button
              className="btn btn-outline-greay my-2 my-sm-0"
              type="submit"
              onClick={() => handleProfileVisit()}
            >
              <AccountCircleIcon fontSize="large" />
            </button>
           ) : (
            ""
          )} 
 */}
          <Model />
        </div>
      </div>
    </>
  );
};
export default Header;
