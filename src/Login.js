import { Button } from '@mui/material';
import React from 'react'
import './Login.css';
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import {auth, provider} from './firebase';

function Login() {

  const [state, dispatch] = useStateValue();
  const signIn =() => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    dispatch({
      type: actionTypes.SET_USER,
       user: result.user,
     })
     console.log(result.user)}).catch(error =>alert(error.message))
         };

  return (
    <div className='login'>
        <div className='login_logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png' alt=''/>
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt=''/>
                    
        </div>
        <Button type='submit' onClick={signIn}>Sign In</Button>

    </div>
  )
}

export default Login