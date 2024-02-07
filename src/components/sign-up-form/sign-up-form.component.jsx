import { useState } from 'react';

import './sign-up-form.styles.scss';

import FormInput from '../form-input/form-input.component';
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocFromAuth 
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Your passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email, 
        password
      );

      await createUserDocFromAuth(user, { displayName });      
      resetFormFields();
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('This email is already in use');
      }
      console.log(`use creation encountered an error`, error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name] : value});
  }

  return (
    <div className='sign-up-form'>
      <h1>Sign up with youre email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text" 
          onChange={handleChange} 
          required 
          name="displayName" 
          value={displayName} 
        />
        <FormInput
          label="Email"
          type="email" 
          onChange={handleChange} 
          required 
          name="email" 
          value={email} 
        />
        <FormInput 
          label="password"
          type="password" 
          onChange={handleChange} 
          required 
          name="password" 
          value={password} 
        />
        <FormInput 
          label="confirmPassword"
          type="password"
          onChange={handleChange} 
          required  
          name="confirmPassword" 
          value={confirmPassword} 
        />
        <Button type="submit">
          Sign up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm;