import React from 'react'
import './ProductDetail.css'
import {Link} from "react-router-dom";

export function ProductDetail({product, width, basketCount, onAddToBasketClick}) {
    return (
        <div className="productWrapper"
             style={{width: width + '%'}}>
            <div className="productDetail">
                <div>
                    <Link to={"/details/" + product.id}>{product.productName}</Link>
                </div>
                <div>Price: {product.price}</div>
                <div>
                    <button onClick={() => onAddToBasketClick(product)}>Sepete Ekle</button>
                </div>
                {basketCount && (
                    <div style={{color: 'green'}}>Sepete {JSON.stringify(basketCount)} adet eklediniz</div>
                )}
            </div>
        </div>
    )
}
