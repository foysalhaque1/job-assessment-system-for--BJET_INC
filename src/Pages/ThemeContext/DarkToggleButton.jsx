import React, { use } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';


const DarkToggleButton = () => {
    const {darkMode,setDarkMode} = use(ThemeContext)
    
    return (
        <div className='mx-4'>
            <button onClick={()=>setDarkMode(!darkMode)} className='btn btn-secondary  space-x-4'>
                {
                    darkMode ? <div className='flex gap-2 items-center'><FaSun></FaSun> Light</div> : <div className='flex items-center' ><FaMoon></FaMoon> Dark</div>
                }
            </button>
        </div>
    );
};

export default DarkToggleButton;