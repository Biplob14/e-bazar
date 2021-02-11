import React from 'react';
import "./Product.css";
import Book_1 from './img/book-1.jpg'
import Mixer from './img/mixer.jpg'
import Wrist_watch from './img/watch.jpg'
import G_home from './img/google_home.jpg'
import Ipad from './img/ipad.jpg'
import TV from './img/samsung_tv.png'

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{ title }</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{ price }</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                    {console.log(TV)}
                </div>
            </div>
            {console.log(Book_1)}
            <img src={image} alt=""/>

            <button>Add to Cart</button>
        </div>
    )
}

export default Product;