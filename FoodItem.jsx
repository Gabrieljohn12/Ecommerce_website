import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/product';
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({ id, name, description, price, image }) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
    const itemCount = cartItem[id] || 0;

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />
                {!cartItem[id] ? (
                    <img 
                        className='add' 
                        src={assets.add_white} 
                        alt='Add to cart' 
                        onClick={() => addToCart(id)}
                    />
                ) : (
                    <div className='food-item-count'>
                        <img 
                            src={assets.remove_sign} 
                            alt='Remove one' 
                            onClick={() => removeFromCart(id)}
                        />
                        <p>{itemCount}</p>
                        <img 
                            src={assets.add_sign} 
                            alt='Add one' 
                            onClick={() => addToCart(id)}
                        />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_icon} alt='Rating' />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodItem; 

/* import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/product'
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({id, name, description, price, image}) => {

    const [cartItem, addToCart, removeFromCart] = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        {!cartItem[id]
            ? <img className='add' src={assets.add_white} alt="" onClick={()=> addToCart(id)}/>
            : <div className='food-item-count'>
                <img src={assets.remove_sign} alt="" onClick={()=> removeFromCart(id)} />
                <p>{itemCount}</p>
                <img src={assets.add_sign} alt="" onClick={()=> addToCart(id)}/>
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_icon} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem; */