import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import DarkModeToggle from "./DarkModeToggle";
import LanguageSelector from "./LanguageSelector";
import { LanguageProvider } from "./LanguageContext";
import Greeting from "./Greeting";


function App() {
  const { theme , headingColor } = useContext(ThemeContext);
 
  return (
    <LanguageProvider>
      <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-r ${theme} text-white`}>
        <div className="fixed top-4 right-4 p-3">
          <DarkModeToggle />
        </div>
        <h1 className={`text-4xl font-extrabold text-center mb-8 ${headingColor} `}>Multi-Language Translator</h1>
        <LanguageSelector />
        <Greeting/>
      </div>
    </LanguageProvider>

  )
}

export default App
