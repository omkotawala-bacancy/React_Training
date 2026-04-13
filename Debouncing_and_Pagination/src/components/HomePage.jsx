import React from 'react'
import Table from './Table'
import { useState, useEffect } from 'react'
import { useDebouncing } from '../hooks/useDebouncing'
import Cart from './Cart'

function HomePage(props) {

    const products = props.productData;

    return (
        <div style={{ margin: '0px auto' }}>
            <div style={{display: 'flex'}}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', width: '70%', backgroundColor: 'rgb(222, 251, 252)' }}>
                    {
                        products.map((product) => (
                            <Table key={product.id} product={product} type={'product'}/>
                        ))
                    }
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', width: '30%', backgroundColor: 'rgb(199, 252, 205)' }}>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default HomePage