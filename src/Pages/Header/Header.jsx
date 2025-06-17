import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/Authcontext';
import logo from '../../../src/assets/logo.png'
import DarkToggleButton from '../ThemeContext/DarkToggleButton';
import Swal from 'sweetalert2';


const Header = () => {
    const { user, logOut } = use(AuthContext);
    const handleSignOut = () => {
        logOut().then(() => {
            Swal.fire({
                title: "Log out successfully",
                icon: "success",
                draggable: true
            });
        }).catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-1">
                            <Link className='btn btn-secondary' to={'/'} >Home</Link>
                            <Link className='btn btn-secondary' to={'/assignments'} >Assignments</Link>
                            {user && <Link className='btn btn-secondary' to={'/pendingAssignments'} >Pending Assignments</Link>}
                        </ul>
                    </div>
                    <img className='w-[100px]' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5 px-1">
                        <Link to={'/'} >Home</Link>
                        <Link to={'/assignments'} >Assignments</Link>
                        {user && <Link to={'/pendingAssignments'} >Pending Assignments</Link>}

                    </ul>
                </div>
                
                
                <div className="navbar-end space-x-2.5">
                    <DarkToggleButton></DarkToggleButton>
                 {
                        user ? (<button onClick={handleSignOut} className='btn'>Log out</button>) : (<Link className='btn' to={'/login'} >Log in</Link>)
                    }

                    {
                        user &&
                        <details className="dropdown">
                            <summary className="btn m-1 relative group">
                                <img className=' ' src={user.photoURL} alt="" />
                                <div className='absolute w-full h-full -bottom-10 opacity-0 group-hover:bottom-0 group-hover:opacity-100 bg-black/20 flex justify-center items-center transition-all duration-300'>
                                    <h2 className='text-white font-bold'>{user.displayName}</h2>

                                </div>

                            </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 space-y-3 shadow-sm">
                                <Link to={'/createAssignment'} className='btn btn-primary' >Create Assignment </Link>
                                <Link to={'/myAttemptedAssignments'} className='btn btn-primary' >My Attempted Assignments </Link>

                            </ul>
                        </details>

                    }

                    <div>{user && user.email}</div>
                   


                </div>
            </div>
        </div>
    );
};

export default Header;