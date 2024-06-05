// import { IoCamera } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
const Profile = () => {
  const email=useParams()
  return (
    <div className="card w-full lg:w-1/2 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="avatar flex justify-center ">
        <div className="lg:w-24 w-20 relative bottom-[36px]  rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">email</h2>
        <p>role</p>
        <div className="card-actions justify-end">
          <Link to={`update-profile/:${email}`} className="btn btn-success btn-outline rounded">
            update profile
          </Link>
        </div>
      </div>

      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="avatar flex justify-center ">
        <div className="lg:w-24 w-20 relative bottom-[36px]  rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="card-body">
        <h2 className="text-xl">Name:joni kumar das</h2>
        <p>Email:jonikumardas1@gmail.com</p>
        <div className="card-actions justify-enter">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
