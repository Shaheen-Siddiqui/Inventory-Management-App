import { Link } from "react-router-dom";

import "./SideBar.css";

export const SideBar = () => {
  return (
    <>
      <div className="sidebar-case">
        <ul className="list-group">
          <Link to="/">
            <li className="button-71 list-group-item">DashBoard</li>
          </Link>

          <Link to="/department">
            <li className="button-71 list-group-item">Dipartment</li>
          </Link>

          <Link to="/product">
            <li className="button-71 list-group-item">Products</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
