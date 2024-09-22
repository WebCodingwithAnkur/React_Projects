import { createContext, useState } from "react";

export const ThemeContext = createContext('');

export const ThemeProvider = ({children}) =>{

    const[theme, setTheme ] = useState('bg-gray-700');
    const[headingColor,setHeadingColor] = useState('text-white');
    const[buttonTheme,setbuttonTheme] = useState('text-white');

    const toggleTheme  = () => {
     
      setTheme((prevTheme) => (prevTheme === 'bg-gray-700' ? 'bg-white-700' : 'bg-gray-700'));  

      setHeadingColor((prevheadingColor) => (headingColor === 'text-white' ? 'text-black' :'text-white'));

      setbuttonTheme((prevbuttonTheme) => (buttonTheme === 'text-white' ? 'text-gray-800' : 'text-white'));
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme,headingColor,buttonTheme}}>
           {children}
        </ThemeContext.Provider>
    )
} 