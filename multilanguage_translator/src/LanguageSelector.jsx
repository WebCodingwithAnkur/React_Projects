import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const LanguageSelector = () => {
 
    const {switchLanguage} = useContext(LanguageContext);


  return (
    <select 
       onChange={(e) => switchLanguage(e.target.value)}  
       className='mb-8 p-2 bg-white text-gray-800 rounded-lg shadow-lg transition-all'>
       <option value="en">English</option>
       <option value="es">Spanish</option>
       <option value="fr">French</option>
       <option value="de">German</option> 
    </select>
  )
}

export default LanguageSelector
