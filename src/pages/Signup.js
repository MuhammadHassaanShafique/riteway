import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import auth from '../utils/firebase'
import Loader from '../components/SharedComponents/Loader';
 
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
 
    const onSubmit = async (e) => {
      e.preventDefault()
     setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // const user = userCredential.user;
            setLoading(false)
            navigate("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
 
  return (
        <div className='wrapper'>                  
            <img src="/img/logo.jpeg" alt='logo' className="img-logo"/>                                                              
            <form>                                                                                            
                <div>
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        type="email"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                    
                        placeholder="Email address"                                
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required                                 
                        placeholder="Password"              
                    />
                </div>                                             
                
                <button
                    type="submit" 
                    onClick={onSubmit}    
                    disabled={loading}  
                    className="loadingButton button"                  
                >  
                {loading ? <Loader />:"Sign up " }                                
                </button>
                                                                
            </form>
            
            <p>
                Already have an account?{' '}
                <NavLink to="/" >
                    Sign in
                </NavLink>
            </p>  
        </div>                   
  )
}
 
export default Signup