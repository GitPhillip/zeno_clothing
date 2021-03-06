import { Link } from "react-router-dom";

import ProductCard from '../product-card/product-card-component';

import './category-preview.styles.scss';

const CategoryPreview = ({ title, products }) =>{

    return(
        <div className='category-preview-container'>
            <h2>
                <Link className="nav-link" to={title}>
                    <span className='title'>{title.toUpperCase()}</span>
                </Link>
            </h2>
            <div className='preview'>
            {
                products
                .filter( (_, index) => index<4)//with _ we don't want the instance
                .map(
                    product => (<ProductCard key={product.id} product={product}/>)
                )                
            }
            </div>
        </div>
    );
}
export default CategoryPreview;