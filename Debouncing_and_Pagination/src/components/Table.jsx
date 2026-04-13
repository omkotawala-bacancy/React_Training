import React from 'react'
import { useCart } from '../hooks/useCart'

function Table(props) {

    const product = props.product
    const type = props.type

    const { handleAdd, handleRemove} = useCart()
    return (
        <div>

            <table border='1px solid white' style={{margin: '15px auto'}}>
                <tbody>
                    <tr>
                        <td>Thumbnail</td>
                        <td><img src={product.images[0]} width='100px' /></td>
                    </tr>
                    <tr>
                        <td>title</td>
                        <td>{product.title}</td>
                    </tr>
                    <tr>
                        <td>category</td>
                        <td>{product.tags[0]}</td>
                    </tr>
                    <tr>
                        <td>price</td>
                        <td>$ {product.price}</td>
                    </tr>
                    <tr>
                        <td>Rating</td>
                        <td>{product.rating}</td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td>{product.stock}</td>
                    </tr>
                    <tr>
                        {
                            type === 'cart' ? 
                                (<button onClick={() => {handleRemove(product.id)}}>Remove from Cart</button>):
                                (<button onClick={() => {handleAdd(product)}}>Add To Cart</button>)
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table