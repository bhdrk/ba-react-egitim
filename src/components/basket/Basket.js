import React from 'react'
import {Link} from "react-router-dom";
import {useBasketTotalProductCount} from "../../Store";

export function Basket() {

    let totalProductCount = useBasketTotalProductCount()

    return (
        <div>
            <Link to="/basket"> SEPETİM ({totalProductCount})</Link>
        </div>
    )
}
