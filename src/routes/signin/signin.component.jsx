import { signinWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signinWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }
  return (
    <div style={{marginTop: "200px"}}>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn;