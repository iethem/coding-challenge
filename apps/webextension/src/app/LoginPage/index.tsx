import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

import { useAuth, getFirebaseAuth } from "../Auth/use-auth";

const firebaseAuth = getFirebaseAuth();

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

function LoginPage() {
  const navigate = useNavigate();
  // let location = useLocation();
  const auth = useAuth();
  
  // let from = location.state?.from?.pathname || "/";

  if(auth.user) {
      navigate('/');
  }

  return (
    <div>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </div>
  );
}

export default memo(LoginPage);
