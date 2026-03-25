import { useNav } from "../hooks/useNav";

function Navbar() {

    const {query, handleChange, handleCategory, categories, handleType} = useNav()

    return (
        <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'blue', color: 'white', height: '40px', padding: '10px'}}>
            <div>
                <label htmlFor="search">Search The Product : </label>
                <input

                    type="text"
                    value={query}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    placeholder='Serch products'
                />
            </div>
            <div>
                <label htmlFor="category">Category Filtering : </label>
                <select name="category select" id="category" onChange={(e) => {
                    handleCategory(e)
                }}>
                    {
                        categories.map(cat => (
                            <option key={Math.random() * 100000000} value={cat}>{cat}</option>
                        ))
                    }
                </select>

                <label htmlFor="type" style={{ marginLeft: "20px" }}>Sorting: </label>
                <select onChange={(e) => {
                    handleType(e)
                }}>
                    <option value="price-asc">Ascending by Price</option>
                    <option value="price-desc">Descending by Price</option>
                    <option value="rating-asc">Ascending by Rating</option>
                    <option value="rating-desc">Descending by Rating</option>
                </select>
            </div>
        </div>
    )

}

export default Navbar;