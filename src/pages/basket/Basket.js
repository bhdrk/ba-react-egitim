import React from 'react'
import AppLayout from "../../AppLayout";
import {Link} from "react-router-dom";
import {useBasketActions, useBasketState, useBasketTotalProductPrice} from "../../Store";

function BasketPage() {

    let basket = useBasketState();
    let totalProductPrice = useBasketTotalProductPrice();
    let {removeBasketItem} = useBasketActions();

    const onRemoveItemClick = (product) => {
        removeBasketItem(product);
    };

    return (
        <AppLayout>
            <table style={{margin: '20px auto'}}>
                <thead>
                <tr>
                    <th align="center">İşlemler</th>
                    <th align="center">Ürün Adedi</th>
                    <th align="center">Ürün Adı</th>
                    <th align="center">Birim Tutarı</th>
                    <th align="center">Toplam Tutarı</th>
                </tr>
                </thead>
                <tbody>
                {basket.length > 0 ? (
                    basket.map(product => (
                        <tr key={product.id}>
                            <td align="center">
                                <button onClick={() => onRemoveItemClick(product)}>X</button>
                            </td>
                            <td align="center">{product.count}</td>
                            <td><Link to={'/details/' + product.id}>{product.productName}</Link></td>
                            <td align="center">{product.price} TL</td>
                            <td align="center">{product.count * product.price} TL</td>

                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5}>Sepette hiç ürününüz yok</td>
                    </tr>
                )}
                </tbody>
                {basket.length > 0 && (
                    <tfoot>
                    <tr>
                        <th colSpan={4} align="right">Toplam:</th>
                        <th align="center">{totalProductPrice} TL</th>
                    </tr>
                    </tfoot>
                )}
            </table>
        </AppLayout>
    )
}


export default BasketPage;
