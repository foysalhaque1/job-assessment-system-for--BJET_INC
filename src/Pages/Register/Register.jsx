import React, { use, useState } from 'react';
import { AuthContext } from '../../Provider/Authcontext';

const Register = () => {
    const { createUser, setUser, update } = use(AuthContext);
    const [nameError, setNameError] = useState("")
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 3) {
            return setNameError('name should be more than 3 characters')
        } else {
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password });
        createUser(email, password).then(res => {
            const user = res.user;
            console.log(user);
            update({ displayName: name, photoURL: photo }).then(()=>{
                setUser({...user,displayName:name,photoURL:photo})
            }).catch(error=>{
                console.log(error)
                setUser(user)
            })
        }).catch(error => {
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">


                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <form onSubmit={handleRegister} className="">
                                {/* name */}
                                <label className="label">Name</label>
                                <input required name='name' type="text" className="input" placeholder="Name" />
                                {nameError && <p className='text-red-500 font-bold'>{nameError}</p>}
                                {/* photo */}
                                <label className="label">PhotoUrl</label>
                                <input required name='photo' type="text" className="input" placeholder="PhotoURL" />
                                {/* email */}
                                <label className="label">Email</label>
                                <input required name='email' type="email" className="input" placeholder="Email" />
                                {/* password */}
                                <label className="label">Password</label>
                                <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be  6 characters, including number, lowercase letter, uppercase letter" required name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;