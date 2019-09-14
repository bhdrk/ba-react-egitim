import React from 'react'
import './Header.css'
import {Basket} from "../basket";

export function Header() {
    return (
        <div className="header">
            <div className="logo">BİZİM TİCARET</div>
            <div className="basket">
                <Basket/>
            </div>
        </div>
    )
}
