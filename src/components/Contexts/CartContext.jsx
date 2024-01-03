import React , {createContext,useState} from "react";
const CartContext = createContext();

const CartProvider=({children})=>{
    // const s1 = [{
    //     "id":101,
    //     "brand":"Adidas",
    //     "name":"Cartoon Astronaut Shirt",
    //     "imgUrl":"https://previews.dropbox.com/p/thumb/ACErEu_SfSlMjgBJ1Admbedh4uMeyez3TXk0sD2lCMeCEBq2tdvy78NuwjDlawuk_n7R8NRDWr_Dziq7AP3IjjEyBgdiI37bAUNWfX3nK8VwOv_LOizLvvp3fCTO9Vt8dKdRAdUULnX7IkX9WDDzg3mnlLtu39fFkuhW3H09SfEe4vDS2oH40-N2ats3IiUZ67Cr-dA6RjNjx1lwBChiq-_TzHEBqFVyO6absCGJlJSijJAtT5CvMUQw-8rSI_r6-VD-NbKV6iPDt2o13JiaCqqJd718rRPqdgLAX0QIZHeofCiyNmQDqHs7xlWEr9xA0GhgebuMQc2S6tspSNyFtSLw/p.jpeg",
    //     "rating":5,
    //     "price":5850
    // }]
    const [cartItems,setCartItems]=useState([]);
    const [user,setUser]=useState('');

    const addToCart=(item)=>{
        const existingItem = cartItems.find((CartItem)=>CartItem.id===item.id)       
            if (existingItem) {
                setCartItems((prevState) => prevState.map((cartItem) => {
                    if (cartItem.id === item.id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                }));
            } else {
                setCartItems((prevState) => [...prevState, { ...item, quantity: 1 }]);
            }
        
    }

    const removeFromCart=(itemId)=>{      
            const updatedCart = cartItems.filter((item)=>item.id !== itemId);
            setCartItems(updatedCart);
        
    }
    const deleteQuantity=(itemId)=>{
        const element = cartItems.find((CartItem)=>CartItem.id === itemId)
        if(element.quantity>1){
            setCartItems((prevState) => prevState.map((CartItem) => {
                if (CartItem.id === itemId) {
                    return { ...CartItem, quantity: CartItem.quantity - 1 };
                }
                return CartItem;
            }));
        }
        else{
            const updatedCart = cartItems.filter((item)=>item.id !== itemId);
            setCartItems(updatedCart);
        }
    }
    const clearCart =()=>{
        setCartItems([]);
    }
    const calculateTotalCartValue = () => {
        let total = 0;
        cartItems.forEach((cartItem) => {
            total += cartItem.quantity * cartItem.price;
        });
        return total;
    };
    const SigningIn = (UserData)=>{
        setUser(UserData);
    }
    const SigningOut = ()=>{
        setUser('');
    }
    return (
        <CartContext.Provider value={{user,cartItems,addToCart,removeFromCart,deleteQuantity,clearCart,calculateTotalCartValue,SigningIn,SigningOut}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext,CartProvider};