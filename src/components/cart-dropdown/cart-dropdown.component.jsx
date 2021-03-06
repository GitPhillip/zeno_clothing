import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () =>{

    const { cartItems } = useContext(CartContext);//get your persisting state

    //useNavigate is a hook that allows us to get a navigateFunction
    const navigate = useNavigate();

    const checkoutHandler = ( ) =>{
        navigate('/checkout');
    } 
    
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {
                cartItems.length ? (cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                )))
                :
                <p>No items</p>
            }
            {}
            </div>
            <Button onClick={checkoutHandler}>Checkout</Button>
        </div>
    )
}
export default CartDropdown;