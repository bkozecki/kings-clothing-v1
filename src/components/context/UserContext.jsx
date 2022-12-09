import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  createDocFromAuth,
} from "../../utils/firebase.utils";

export const UserCtx = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const ContextUser = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createDocFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserCtx.Provider value={value}>{props.children}</UserCtx.Provider>;
};

export default ContextUser;
