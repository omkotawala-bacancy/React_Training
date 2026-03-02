import { ThemeContext } from './useContext'
import { useContext } from "react";


function ShowTheme(){

    const context = useContext(ThemeContext)
    const theme = context?.theme || 'light'
    return (<>
    
        <h1 className={theme}>The Theme is {theme}</h1>
    </>)
}

export default ShowTheme;