import { FaFacebook } from "react-icons/fa";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import auth from "../firebase/firebase.config";
const Facebook = () => {
  const provider = new FacebookAuthProvider();
  const loginwithgoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        toast.success("user login in successfully");
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        console.log(user.email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        toast.error(errorCode, errorMessage, email);
        console.log(errorCode, errorMessage, email);
      });
  };

  return (
    <div>
      <button
        onClick={loginwithgoogle}
        className="btn btn-outline btn-wide hover:bg-green"
      >
        <FaFacebook />
        Facebook
      </button>
      <Toaster/>
    </div>
  );
};

export default Facebook;
