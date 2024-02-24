import React from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

export function useAuthentication() {

  const [user, setUser] = React.useState<User>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
      setLoading(false);
    });
    setLoading(true);
    return unsubscribeFromAuthStatuChanged;
  }, []);

  return {
    user, loading
  };
  
}
