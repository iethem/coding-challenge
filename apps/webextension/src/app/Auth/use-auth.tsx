import React, { useState, useEffect, useContext, createContext } from 'react';
import * as firebase from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdP7moOQ3nGCOfGlYngNCO4KIgVMwBOJ4",
  authDomain: "meet-o-test.firebaseapp.com",
  projectId: "meet-o-test",
  storageBucket: "meet-o-test.appspot.com",
  messagingSenderId: "826961976362",
  appId: "loaanfddipemlfhiggopcckjkbfndeoe",
};

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}

// interface AuthContextType {
//   user: any;
//   signin: (user: string, callback: VoidFunction) => void;
//   signout: (callback: VoidFunction) => void;
// }

const firebaseAuth = getAuth();
export const getFirebaseAuth = () => firebaseAuth;

const AuthContext = createContext<any>(null!);

export function AuthProvider({ children }: any) {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth}>
      {auth.loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useAuthProvider() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);

  function logout() {
    signOut(firebaseAuth);
  }

  useEffect(() => {
    const firebaseAuth = getAuth();
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    logout,
  };
}
