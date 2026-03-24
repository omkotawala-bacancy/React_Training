import React from 'react'
import Table from './Table'
import { useState, useEffect } from 'react'
import { useDebouncing } from '../hooks/useDebouncing'
import Cart from './Cart'

function Information(props) {



    const [query, setQuery] = useState('')
    const setUrl = props.setUrl

    const products = props.productData;
    const setSearch = props.setSearch;

    const DebounceQuery = useDebouncing(query, 500)

    function handleChange(e) {
        setQuery(e.target.value)
    }

    useEffect(() => {
        setSearch(DebounceQuery)
    }, [DebounceQuery])

    return (
        <div style={{ margin: '0px auto' }}>
            <input

                type="text"
                value={query}
                onChange={handleChange}
                placeholder='Serch products'
            />

            <div style={{display: 'flex'}}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    {
                        products.map((product) => (
                            <Table key={product.id} product={product} type={'product'}/>
                        ))
                    }
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Information