import React from 'react'
import Item from './item'
import './Products.css'
function Product({products,isLoading}) {
  return (
    <div className='productsContainer'>
        {isLoading ? products.map((item)=>{
            return(
                <Item data={item} key={item.id}/>
            );
        }) : <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
    </div>
  )
}

export default Product