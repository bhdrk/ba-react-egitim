import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router";
import AppLayout from "../../AppLayout";
import {Api} from "../../services/api";
import {useBasketActions, useBasketCountsState} from "../../Store";

function ProductDetailsPage({history, match}) {

    const productId = match.params.productId;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    const basketCounts = useBasketCountsState();
    let {addBasketItem} = useBasketActions();

    useEffect(() => {
        setLoading(true);
        Api.getProduct(productId)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
    }, []);

    useEffect(() => {
        console.log('LOADING: ' + loading);
    }, [loading]);

    const page = {
        border: "1px solid orange",
        textAlign: "center",
        padding: "100px",
    };

    if (loading) {
        return (
            <AppLayout>
                <div style={page}>Yükleniyor. Lütfen bekleyin...</div>
            </AppLayout>
        )
    } else {
        return (
            <AppLayout>
                <div style={page}>
                    {product && (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <img src={product.image}/>
                            <span style={{fontSize: "3rem"}}>{product.productName}</span>
                            <span style={{fontSize: "1.5rem"}}>{product.price} TL</span>
                            <br/>
                            <span><button onClick={() => addBasketItem(product)}>Sepete Ekle</button></span>
                            <span>
                                {basketCounts[product.id] && (
                                    <i style={{color: 'green'}}>Bu üründen sepete {basketCounts[product.id]} adet
                                        eklediniz.</i>
                                )}
                            </span>
                        </div>
                    )}
                </div>

            </AppLayout>
        )
    }

}

export default withRouter(ProductDetailsPage);
