import { useContext, useEffect} from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login';
import './App.css';
import Cart from './components/pages/Cart/Cart';
import { CartContext } from './components/Contexts/CartContext';

function App() {
  const {user} = useContext(CartContext)
  const navigate =  useNavigate();

  useEffect(()=>{
    if(user){
      navigate('/');
    }
    else{
      navigate('/login')
    }
  },[user])

  return (

    <>
    
    <Routes>
      <Route exact path='/login' element={<Login  />}/>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
      
    </>
  )
}

export default App