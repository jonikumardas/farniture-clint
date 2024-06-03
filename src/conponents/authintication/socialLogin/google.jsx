import { FaGoogle } from "react-icons/fa";
import auth from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const Google = () => {
  const provider = new GoogleAuthProvider();
  const googleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("user login in successfully");
        console.log(user.email);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="my-3">
      <button
        onClick={googleLogin}
        className="btn btn-outline btn-wide hover:bg-green"
      >
        <FaGoogle />
        Google
      </button>
      <Toaster />
    </div>
  );
};

export default Google;
