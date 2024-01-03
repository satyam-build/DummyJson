import React, { useContext} from 'react'
import { CartContext } from '../../Contexts/CartContext';
import Navbar from '../../navbar/Navbar';
import './Cart.css'
function Cart() {
  const convinentFee =20;
  const bucket = useContext(CartContext)
  const total = bucket.calculateTotalCartValue();
  // eslint-disable-next-line
  const handleRemoveFromCart = (itemId) => {
    bucket.removeFromCart(itemId);
  }
  function handleAdd(value) {
    bucket.addToCart(value);
  }
  const handleQuantity = (value) => {
    bucket.deleteQuantity(value);
  }
  const handleClearCart = () => {
    bucket.clearCart();
  }
 
  return (
    <div className="cart-container">
      <Navbar/>
      {bucket.cartItems.length > 0 ?
        <div className="cartWrapper">
          <div className='cartItms'>
          {bucket.cartItems.map((item) => {

            return (
              <div className="cro-wrapper" key={item.id}>
                <div className="cro" id='item1' >
                  <div className='cro-img'>
                    <img src={item.thumbnail} alt="Hello" />
                  </div>
                  <div className='cro-detail'>
                    <h4 className='cro-brand'>{item.brand}</h4>
                    <h5 className='cro-name'>{item.title}</h5>
                    
                    <div className="cro-point">
                      <h4 className='cro-price'>Eligible for free shipping</h4>
                      <div className="cro-quantityPrice-wrapper">
                        <h4 className='cro-price'>M.R.P :  {item.price}</h4>
                        <div className='cro-quantity-wrapper'>
                          <div className='cro-quantity '> {item.quantity}</div>
                          <button onClick={() => handleAdd(item)} className='cro-quantity cro-quantityAdd'> + </button>
                          <button disabled={item.quantity === 0} onClick={() => handleQuantity(item.id)} className='cro-quantity cro-quantityAdd'> - </button>
                        </div>
                      </div>
                    </div>
                    <button className='cro-delete-item-btn' onClick={() => handleRemoveFromCart(item.id)}> Delete Item</button>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
          <div className='Cart-Info'>
            <div className="delivery" style={{backgroundColor:"#cce7d0", padding:"10px", borderRadius:"15px", width:"100%"}}>
              <div className="address" >
                <h4 style={{margin:"5px 0",fontSize:"17px"}}> Deliver to : <span style={{fontSize:"17px",fontFamily:"Roboto, sans-serif",fontWeight:700}}> Satyam , 201030</span></h4>
                <h4 style={{margin:"5px 0",fontSize:"17px"}}>236,Dhira Towers. Preet Vihar, New Delhi</h4>
              </div>
              <div className="deliveryBtn">
                Change Address
              </div>
            </div>
            <div className="coupon" style={{backgroundColor:"#cce7d0", padding:"15px", borderRadius:"15px", width:"100%", margin:"15px 0"}}>
              <h6 style={{margin:"3px 0",fontSize:"17px"}}>Coupons</h6>
              <div style={{display:"flex",alignItems:"flex-bottom", justifyContent:"space-between"}}>
              <div >Apply Coupons </div>
              <button style={{padding:"10px", border:"1px solid red",color:"red",backgroundColor:"white",fontSize:"13px",fontWeight:700,marginRight:"10px"}}>Apply</button>
              </div>
            </div>
            <div className="price-details" style={{backgroundColor:"#cce7d0", padding:"15px", borderRadius:"15px", width:"100%", margin:"15px 0"}}>
              <h4>Price details </h4>
              <div style={{display:"flex",alignItems:"flex-bottom", justifyContent:"space-between",margin:"15px 0"}}>
              <div style={{fontSize:"17px"}}>Total M.R.P</div>
              <div style={{fontSize:"17px",fontWeight:700}}>{total}</div>
              </div>
              <div style={{display:"flex",alignItems:"flex-bottom", justifyContent:"space-between",margin:"15px 0"}}>
              <div style={{fontSize:"17px"}}>Convinent fee</div>
              <div style={{fontSize:"17px",fontWeight:700}}>{convinentFee}</div>
              </div>
              <div style={{display:"flex",alignItems:"flex-bottom", justifyContent:"space-between", padding:"20px 0",borderTop:"1px solid black"}}>
              <div style={{fontSize:"17px"}}>Total Amount</div>
              <div style={{fontSize:"17px",fontWeight:700}}>{total + convinentFee}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                <button disabled className='cart-delete-item-btn' >Proceed To Checkout</button>
                <button onClick={handleClearCart} className='cart-delete-item-btn'>Clear Cart</button>
              </div>
            </div>
          </div>
        </div> : <div className="container">
          <h3 className='container-h3'>Your cart is Empty 😌</h3>
          <img className='container-img' src="https://i.imgur.com/1fBIYaG.png" alt="" />
        </div>}
    </div>
  )
}

export default Cart