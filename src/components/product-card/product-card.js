import React from 'react'
import './product-card.scss'

export const ProductCard = ({product}) => {

    const { image, price, title} = product;

    return (
        <div className="pc-product-card">
            <div className="pc-product-card__image-holder">
                <img src={image} alt="" />
            </div>
            <div className="pc-product-card__footer">
                <span className="pc-product-card__footer__title">{title}</span>
                <span className="pc-product-card__footer__price">{price}$</span>
            </div>
        </div>
    )
}

export default ProductCard;
