import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import './product-card.styles.scss';

const ProductCard = ({ product }) =>{

    const {name, price, imageUrl} = product; //destructor the properties needed

    const { addItemToCart} = useContext(CartContext)//get your global state

    //function to add product to cart
    const addProductToCart = () => addItemToCart(product);

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type='button' buttonType='inverted' onClick={addProductToCart}>Add</Button>
        </div>
    );
}
export default ProductCard