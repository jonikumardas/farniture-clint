import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

export const hendlesignout = (auth) => {
  signOut(auth)
    .then(() => {
      toast.success("Successfully logged out");
    })
    .catch((error) => {
      toast.error("Error logging out: " + error.message);
    });
};
