import { IoIosCloseCircle } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";

import { FaPlus } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

const DeshboardMnau = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> */}
      <div className="drawer-content flex flex-col mt-10 items-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden flex relative top-[-560px] right-[-3.3rem] "
        >
          <VscThreeBars className="text-4xl hover:text-white"  />
        </label>
      </div>
      <div className="drawer-side">
        <ul className="menu p-4 lg:w-80 w-60 min-h-full bg-green text-base-content z-10">
          <label htmlFor="my-drawer-2" aria-label="close">
            {" "}
            <p className="lg:hidden flex text-2xl relative left-[11.4rem] z-50">
              <IoIosCloseCircle />

            </p>
          </label>
          {/* Sidebar content here */}
         
          <li>
            <Link to="profile">
              {" "}
              <FaPlus /> Profile
            </Link>
          </li>
          <li>
            <Link to="add-product">
              {" "}
              <FaPlus /> Add product
            </Link>
          </li>
          <li>
            <Link to="manage-product">
              {" "}
              <MdOutlineManageAccounts />
              Manage product
            </Link>
          </li>
          <li>
            <Link to="update-profile">
              {" "}
              <FaPlus /> Add user
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeshboardMnau;
