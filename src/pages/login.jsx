import { Link } from "react-router-dom";
import "../cstmStyle/login.css";
import { useState } from "react";
import Google from "../conponents/authintication/google";
import Facebook from "../conponents/authintication/facebook";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../conponents/authintication/firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const hendleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      toast.success("user log in successfull");
      // Clear fields after successful login
      setEmail("");
      setPassword("");
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(`${errorCode}: ${errorMessage}`);
      console.log(errorCode,errorMessage)
    });
  };

  console.log(email, password);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Log in to your account to enjoy personalized shopping experiences,
            track your orders, and manage your wishlist.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={hendleLogin} action="" className="form_main">
            <p className="heading">Login</p>
            <div className="inputContainer">
              <svg
                className="inputIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2e2e2e"
                viewBox="0 0 16 16"
              >
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
              </svg>
              <input
                type="text"
                className="inputField"
                id="username"
                placeholder="Username"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputContainer">
              <svg
                className="inputIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#2e2e2e"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                type={show ? "text" : "password"}
                className="inputField"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              {show ? (
                <IoEye onClick={() => setShow(false)} />
              ) : (
                <IoEyeOff onClick={() => setShow(true)} />
              )}
            </div>
            <Link className="forgotLink" to="">
              Forgot your password?
            </Link>
            <button className="btn btn-outline btn-wide hover:bg-green z-50">
              Log in
            </button>
          </form>
          <div className="divider divider-success">OR</div>
          <div className="my-2 mx-auto">
            <p className="text-center font-semibold text-2xl">social login</p>
            <Google />
            <Facebook />
          </div>
          <p className="font-light p-6">
            Don&apos;t have acoount please{" "}
            <Link className="text-green" to="/register">
              Register?
            </Link>
          </p>
          <Toaster/>
        </div>
      </div>
    </div>
  );
};

export default Login;