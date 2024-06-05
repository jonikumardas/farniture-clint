import { Link } from "react-router-dom";
import image from '../../assets/logo.png'
import { PiShoppingCartLight } from "react-icons/pi";
import { hendlesignout } from "../../sheradComponent/logout";
import auth from "../authintication/firebase/firebase.config";
import { CiLogin } from "react-icons/ci";
const DashboardNavber = () => {
  return (
    <div className="navbar bg-green">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost text-xl">
        <img className=" w-[65px] h-[35px]" src={image} alt="this is logo" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-36 md:w-auto"
          />
        </div>
        <div><PiShoppingCartLight className="text-3xl lg:mx-5" /></div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-9 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-green rounded-box w-52"
          >
            <li>
              <button className="text-white" onClick={()=>hendlesignout(auth)}> <CiLogin />Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavber;
