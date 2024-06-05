/* eslint-disable react/prop-types */
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../conponents/authintication/firebase/firebase.config";

export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
      return () => unsubscribe();
    }, [ ]);
    return (
        <AuthContext.Provider value={user}>
          {children}
        </AuthContext.Provider>
      );
}

export default UserContext;
