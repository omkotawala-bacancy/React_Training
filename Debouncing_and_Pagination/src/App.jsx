import { useState } from 'react'
import { useEffect } from 'react'
import HomePage from './components/HomePage'
import { useFetch } from './hooks/useFetch';
import Navbar from './components/NavBar';
import { useNav } from './hooks/useNav';

function App() {

  const { search, sortBy, category, type, } = useNav()

  const [currentPage, setCurrentPage] = useState(1);
  const baseURL = `https://dummyjson.com/products`
  const limit = 20;

  const searchUrl = search.length > 0 ? `/search?q=${search}&` : `?`;
  const paginationUrl = `limit=${limit}&skip=${(currentPage - 1) * limit}`
  const sortUrl = sortBy.length > 0 ? `&sortBy=${sortBy}&order=${type}` : ``;
  const url =
    category === '' ?
      `${baseURL}${searchUrl}${paginationUrl}${sortUrl}` :
      `${baseURL}/category/${category}${searchUrl}?${paginationUrl}${sortUrl}`

  console.log(url);


  const { data, loading, error } = useFetch(url);

  const productData = data?.products || [];
  const totalPages = data ? Math.ceil(data.total / limit) : 1;

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

  return (
    <div style={{margin: '0px', padding: '0px'}}>

      <Navbar />

      <div >
        <HomePage productData={productData} />

        <button onClick={handlePrevious} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default App
