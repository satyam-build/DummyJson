import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

function Navbar() {
  const {cartItems,SigningOut} = useContext(CartContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">The Indian Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0" style={{marginRight:"57vw"}}>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li> */}
            {/* <li className="nav-item">
              <a href="/" className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          <form className="d-flex" role="search" style={{display:"flex",flexDirection:"row",marginRight:"20px",padding:"10px"}}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:"50vw",maxWidth:"250px"}} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <Link to='/cart'>
          <button type="button" className="btn btn-outline-success position-relative">
          <i class="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
          </Link>
          <button type="button" onClick={()=>{SigningOut()}} className="btn btn-outline-success position-relative">Sign Out</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar