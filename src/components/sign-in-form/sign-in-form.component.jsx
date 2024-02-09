import { 
  signinWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import { useState } from "react";

import './sign-in-form.styles.scss';

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signinWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {    
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name] : value});
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email" 
          onChange={handleChange} 
          required 
          name="email" 
          value={email} 
        />
        <FormInput
          label="Password"
          type="password" 
          onChange={handleChange}
          required 
          name="password" 
          value={password} 
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;