import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Product from '../Product/Products';
import './Home.css'
function Home() {
  let productsCopy = [];
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchresult] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const getProducts = (skipVal = skip) => {
    const searchUrl = `https://dummyjson.com/products/search?q=${query}`;
    const baseurl = `https://dummyjson.com/products?limit=20&skip=${skipVal}`;
    const url = query.length > 0 ? searchUrl : baseurl;
    fetch(url)
      .then(
        res => res.json()
      )
      .then(
        (data) => {
          console.log(data.products[0]);
          setProducts(data.products);
          productsCopy = data.products;
        }
      )
  }
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  }
  const handleSubmit = () => {
    // setQuery(searchInput.replace(/\s/g, '%'));
    setQuery(searchInput);
    // getProducts(searchInput);
    console.log(query);
  }
  const handlePrev = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
    setPage((prevpage) => prevpage - 1);
    setSkip((prevstate) => prevstate - 20)
    setIsLoading(true)
    console.log(page);
  }
  const handleNext = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling behavior
    });
    setPage((prevpage) => prevpage + 1);
    setSkip((prevstate) => prevstate + 20)
    setIsLoading(true)
    console.log(page);
  }

  function filterAscending(){
    setProducts(prevState=>{
      return [...prevState].sort((a, b) => a.price - b.price);
  })
  console.log(products)
  }

  function filterDescending(){
    setProducts(prevState=>{
      return [...prevState].sort((a, b) => b.price - a.price);
    })
  }

  function removeFilter(){
    setProducts(productsCopy)
  }

  useEffect(() => {
    getProducts();
  }, [skip, query])
  return (

    <div className='parentdiv'>
      <Navbar />
      <section id="product1" className="section-p1">
        <div className="searchbox">
          <input onChange={handleSearch} type="text" placeholder='Enter any book or author' />
          <button disabled={searchInput.length <= 0} onClick={handleSubmit} className='searchbtn'>Search</button>
          {/* <i onClick={handleSubmit}><img src="https://i.imgur.com/V4e83VH.png" alt="search" /></i> */}
        </div>
        <div className='HomeBoxHeading'>
          <div >Featured products</div>
        </div>
        <div className="HomeBox">
          <div className="filterBox">
            <div class="btn-group">
              <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By
              </button>
              <ul class="dropdown-menu">
                <li><button onClick={filterAscending}  class="dropdown-item">Price Low to High</button></li>
                <li><button onClick={filterDescending} class="dropdown-item">Price High to Low</button></li>
              </ul>
            </div>
            {/* <div className="removeFilterBox">
              <button className="hidden">
                Remove filters
              </button>
            </div> */}
          </div>
        </div>
        <div className="pro-container">

          <Product products={products} isLoading={isLoading} />

        </div>
        <div className="btnSection">
          <button disabled={page === 1} onClick={handlePrev} className="btn">Previous</button>
          <button disabled={page === 5} onClick={handleNext} className="btn">Next</button>
        </div>
      </section>

    </div>
  )
}

export default Home