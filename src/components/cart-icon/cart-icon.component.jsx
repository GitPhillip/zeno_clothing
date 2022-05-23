import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () =>{

    const { isCartOpen, setIsCartOpen } = useContext(CartContext); //bring in your global state

    const onCartClick = () =>{
        setIsCartOpen(!isCartOpen); //inverse the boolean state
    }
    return(
        <div className='cart-icon-container' onClick={onCartClick}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>10</span>
        </div>
    );
}
export default CartIcon;