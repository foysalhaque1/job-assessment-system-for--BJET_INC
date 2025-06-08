import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                       
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                             <h1 className="text-5xl font-bold">Login now!</h1>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                            <h1 className='text-center font-bold' >Don't have an account?<Link to={'/register'} className='text-blue-600' >Register</Link> </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;