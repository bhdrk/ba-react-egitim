import React, {useEffect, useState} from 'react'
import {ProductDetail} from "../../components";
import './ProductList.css'
import AppLayout from "../../AppLayout";
import {Api} from "../../services/api";
import {useBasketActions, useBasketCountsState} from "../../Store";

export default function ProductListPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Api.getProducts().then((res) => {
            setProducts(res.data)
        })
    }, []);

    return (
        <AppLayout>
            <ProductList
                columns={3}
                data={products}
            />
        </AppLayout>
    )
}

function ProductList({data, columns}) {
    const width = 100 / columns;
    const basketCounts = useBasketCountsState();
    let {addBasketItem} = useBasketActions();

    const onAddToBasketClick = (product) => {
        addBasketItem(product)
    };

    return (
        <>
            <div className="productList">
                {
                    data.map(p => (
                        <ProductDetail
                            key={p.id}
                            product={p}
                            width={width}
                            onAddToBasketClick={onAddToBasketClick}
                            basketCount={basketCounts[p.id]}
                        />
                    ))
                }
            </div>
            <div className="clearall"/>
        </>
    )
}

