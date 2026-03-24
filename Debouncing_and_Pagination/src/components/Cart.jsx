import React from 'react'
import { useCart } from '../hooks/useCart'
import Table from './Table'

function Cart() {

    const {totalProducts, cart, totalPrice} = useCart()

    return (
        <div>
            <div>
                Cart: {totalProducts}
            </div>
            {
                cart.map(product => (
                    <Table key={product.id} product={product} type={'cart'}/>
                ))
            }
            <div>
                Cart Total: ${totalPrice}
            </div>
        </div>
        
    )
}

export default Cart