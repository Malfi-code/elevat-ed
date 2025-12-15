import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Login() {
    const [showError, setShowError] = useState(false);

    const handleLogin = () => {
        setShowError(true);

        setTimeout(() => {
            setShowError(false);
        }, 2000); // 3 seconds
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-4xl font-bold">Welcome to ElevatEd</p>
            <p className="text-center mb-5">Please log in to continue.</p>
            {/* Username and password input fields */}
            <input className="p-5 border border-black rounded" type="text" placeholder="email@graded.br" />
            <input className="p-5 border border-black rounded" type="password" placeholder="Password" />
            {/* Login button */}
            <Button buttonStyle="btn--primary" onClick={handleLogin}>Log In</Button>
            {showError && <p className="text-red-500 mt-2">Invalid credentials. Please try again.</p>}
        </div>
    );
}
  
export default Login;
  