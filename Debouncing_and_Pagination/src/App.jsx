import { useState } from 'react'
import { useEffect } from 'react'
import Information from './components/Information'
import { useFetch } from './hooks/useFetch';

function App() {

  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('')
  const [type, setType] = useState('asc')
  const baseURL = `https://dummyjson.com/products`
  const limit = 10;

  const searchUrl = search.length > 0 ? `/search?q=${search}&` : `?`;
  const paginationUrl = `limit=${limit}&skip=${(currentPage - 1) * limit}`
  const sortUrl = sortBy.length > 0 ? `&sortBy=${sortBy}&order=${type}` : ``;
  const url =
    category === '' ?
      `${baseURL}${searchUrl}${paginationUrl}${sortUrl}` :
      `${baseURL}/category/${category}${searchUrl}?${paginationUrl}${sortUrl}`

  console.log(url);


  const { data, loading, error } = useFetch(url);
  const { data: categoriesData } = useFetch("https://dummyjson.com/products/category-list");

  const productData = data?.products || [];
  const totalPages = data ? Math.ceil(data.total / limit) : 1;
  const categories = categoriesData || [];

  useEffect(() => {
    setCurrentPage(1)
  }, [search])

  function handlePrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handleCategory(e) {
    setCategory(e.target.value)
    console.log(category)
  }

  function handleType(e) {
    setType(e.target.value.split('-')[1])
    setSortBy(e.target.value.split('-')[0])
  }

  return (
    <>
      <div>
        <label htmlFor="category">Select the category for Sorting : </label>
        <select name="category select" id="category" onChange={handleCategory}>
          {
            categories.map(cat => (
              <option key={Math.random() * 100000000} value={cat}>{cat}</option>
            ))
          }
        </select>

        <label htmlFor="type" style={{ marginLeft: "20px" }}>Select the type for the sorting: </label>
        <select onChange={handleType}>
          <option value="price-asc">Ascending by Price</option>
          <option value="price-desc">Descending by Price</option>
          <option value="rating-asc">Ascending by Rating</option>
          <option value="rating-desc">Descending by Rating</option>
        </select>
      </div>

      <Information productData={productData} setSearch={setSearch} />

      <button onClick={handlePrevious} disabled={currentPage === 1}>Prev</button>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </>
  )
}

export default App
