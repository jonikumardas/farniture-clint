import { Link } from "react-router-dom";
import image from "../assets/logo.png";

const Navber = () => {
  const manu = (
    <>
      <li className="hover:text-black">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-black">
        <Link to="/product">Product</Link>
      </li>
      <li className="hover:text-black">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:text-black">
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-green ">
      <div className="navbar-start lg:ms-[10%]">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-bold text-white"
          >
            {/* manubar here  */}
            {manu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className=" w-[81px] h-[41px]" src={image} alt="this is logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-white">
          {/* manu bar here  */}
          {manu}
        </ul>
      </div>
      <div className="navbar-end lg:me-[10%]">
        <Link
          className="font-bold me-3 btn rounded-xl hover:rounded-s-badge hover:text-green-btn"
          to="/login"
        >
          Login
        </Link>
        <ul className="menu menu-horizontal px-1 font-bold text-white">
          <li>
            <Link
              to="/deshboard"
              className="font-bold text-white hover:text-black"
            >
              Deshboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
