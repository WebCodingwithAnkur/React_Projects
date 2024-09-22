import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'

const Greeting = () => {

    const  {language } = useContext(LanguageContext);

    const greetings = {
        en:'Web Coding with Ankur',
        es:'Codificación web con Ankur',
        fr:'Codage Web avec Ankur',
        de:'Webcodierung mit Ankur',
    }

  return (
    <h2 className='text-2xl font-semibold bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md animate-fadeIn'>
        {greetings[language]}
    </h2>
  )
}

export default Greeting
