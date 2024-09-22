import React, { useContext } from 'react'
import  {FaSun,FaMoon } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';

const DarkModeToggle = () => {
   
    const {theme , toggleTheme,buttonTheme} = useContext(ThemeContext);
  
  return (
    <button 
    
    onClick={toggleTheme}
    className={`mb-8 p-2 ${buttonTheme}  rounded-md shadow-lg border border-gray-300 dark:bg-gray-700 dark:text-white focus:outline:none *:focus:ring-2 
    focus:ring-blue-500`}>

    {theme === 'bg-white-700' ? <FaMoon size={20} title="Dark Mode" className='transition-transform duration-300 ease-in-out transform hover:scale-105'/> :
     <FaSun size={20} title="light-mode" className='p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg
     transition-transform duration-300 ease-in-out transform hover:scale-105'/> }
    </button>
  )
}

export default DarkModeToggle
