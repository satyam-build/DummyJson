import React, { useContext } from 'react'
import './Products.css'
import { CartContext } from '../Contexts/CartContext'
function Item({ data }) {
  const { addToCart } = useContext(CartContext);
  function handleAdd(value) {
    addToCart(value);
  }
  return (
    <div className="pro" id='props1' key={data.id}>
                <img  src={data.thumbnail} alt="Hello" loading='lazy' />
                <div className="des">
                    <span >{data.title}</span>
                    <h5 >{data.brand}</h5>
                    <h5 >Category : {data.category}</h5>    
                    <h5>ICI Ratings :  {data.rating}</h5>                
                    <h4>Price : {data.price}Rs</h4>
                </div>
                {/* <i onClick={() => handleAdd(data)} className="fa fa-shopping-cart cart"></i> */}
                <i onClick={() => handleAdd(data)} className="fa-solid fa-cart-plus cart"></i>
            </div>
  )
}

export default Item