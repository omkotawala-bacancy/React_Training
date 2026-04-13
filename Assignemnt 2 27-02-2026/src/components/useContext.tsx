import React, { useState } from "react";
import { useContext } from "react";
import ShowTheme from './ShowTheme.tsx'
import '../css/Context.css'

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

function ContextAPI() {

    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ShowTheme />
            <Button />
        </ThemeContext.Provider>
    );

}

function Button() {

    const context = useContext(ThemeContext)

    if (!context) return

    const {toggleTheme} = context

    return (
        <button  onClick={toggleTheme}>
            Click
        </button>
    );
}
export { ContextAPI, Button, ThemeContext };