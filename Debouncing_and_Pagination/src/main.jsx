import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import { NavProvider } from './context/NavProvider.jsx'

createRoot(document.getElementById('root')).render(

    <CartProvider>
        <NavProvider>
            <App/>
        </NavProvider>
    </CartProvider>

)
