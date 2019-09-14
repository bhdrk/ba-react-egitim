import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import ProductListPage from "./pages/product/ProductList";
import ProductDetailsPage from "./pages/product/ProductDetails";
import RegisterPage from "./pages/register/RegisterPage";
import {Provider} from "react-redux";
import BasketPage from "./pages/basket/Basket";
import {Store} from "./Store";


function App() {
    return (
        <BrowserRouter>
            <Provider store={Store}>
                <Redirect to="/list" from="/" exact/>
                <Route path="/list"
                       component={ProductListPage}/>
                <Route path="/details/:productId"
                       component={ProductDetailsPage}/>
                <Route path="/register"
                       component={RegisterPage}/>
                <Route path="/basket"
                       component={BasketPage}/>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
