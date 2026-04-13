import React from 'react'
import { useCart } from '../hooks/useCart'
import Table from './Table'

function Cart() {

    const {totalProducts, cart, totalPrice, handleClearCart} = useCart()

    return (
        <div>
            <div>
                <p>Cart: {totalProducts}</p>
                <p>Cart Total: ${totalPrice}</p>
                <button onClick={() => {handleClearCart()}}>Clear Cart</button>
            </div>
            {
                cart.map(product => (
                    <Table key={product.id} product={product} type={'cart'}/>
                ))
            }
        </div>
        
    )
}

export default Cart