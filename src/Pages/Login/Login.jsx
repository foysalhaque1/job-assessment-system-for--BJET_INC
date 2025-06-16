import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/Authcontext';
import { FaGoogle } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleSignIn, setUser } = use(AuthContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password).then(res => {
            const user = res.user;
            setUser(user)
           
            navigate(`${location.state ? location.state : '/'}`);
             Swal.fire({
                title: "Log in successfully",
                icon: "success",
                draggable: true
            });
        }).catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
        })


    };
    const handleGoogleSignIn = e => {
        e.preventDefault();
        googleSignIn().then(res => {
            const user = res.user;
            console.log(user)
        }).catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
        })
    }
    return (
        <div className='flex items-center'>


            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-9">
                <div className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleSubmit} className="">
                        <label className="label">Email</label>
                        <input required name='email' type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input required name='password' type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-500 font-bold' >{error}</p>}
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                    <button onClick={handleGoogleSignIn} className='btn'><FaGoogle></FaGoogle> Google Sign In </button>
                    <h1 className='text-center font-bold' >Don't have an account?<Link to={'/register'} className='text-blue-600' >Register</Link> </h1>
                </div>
            </div>
        </div>

    );
};

export default Login;