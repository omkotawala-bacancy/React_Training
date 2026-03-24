import { useEffect, useState } from "react"
import { CartContext } from "./CartContext"


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
        const cartData = localStorage.getItem('cart')
        return cartData ? JSON.parse(cartData) : []
    })

    const totalProducts = cart.length

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0)

    const handleAdd = (product) => {
        setCart(prev => [...prev, product])
    }

    const handleRemove = (id) => {
        setCart(prev => prev.filter(item => (item.id !== id)))
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handleClearCart = () => {
        setCart([])
        localStorage.removeItem('cart')
    }

    return (
          <CartContext.Provider
          value={{
            cart,
            setCart,
            handleAdd,
            handleClearCart,
            handleRemove,
            totalProducts,
            totalPrice
          }}>
            {children}
          </CartContext.Provider>
    )
}