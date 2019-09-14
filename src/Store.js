import {createStore} from "redux";
import {useDispatch, useSelector} from "react-redux";

const INITIAL_STATE = {
    totalProductPrice: 0,
    totalProductCount: 0,
    basket: [],
    basketCounts: {}
};

export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM';
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM';

export const Store = createStore((state = INITIAL_STATE, action) => {
        switch (action.type) {
            case ADD_BASKET_ITEM: {
                let basket = state.basket;
                let basketCounts = state.basketCounts;
                let product = action.payload;
                let index = basket.findIndex(p => p.id === product.id);

                if (index > -1) {
                    let basketItem = basket[index];
                    let count = basketItem.count + 1;

                    basket[index] = {
                        ...basketItem,
                        count: count
                    };

                    basketCounts = {
                        ...basketCounts,
                        [product.id]: count
                    };
                } else {
                    let basketItem = {
                        ...product,
                        count: 1
                    };
                    basket = [
                        ...basket,
                        basketItem
                    ];
                    basketCounts = {
                        ...basketCounts,
                        [basketItem.id]: 1
                    }
                }

                let totalProductCount = calculateTotalProductCount(basket);
                let totalProductPrice = calculateTotalProductPrice(basket);

                return {
                    ...state,
                    totalProductCount,
                    totalProductPrice,
                    basket,
                    basketCounts
                };
            }

            case REMOVE_BASKET_ITEM: {
                let basket = state.basket;
                let basketCounts = state.basketCounts;
                let product = action.payload;
                let index = basket.findIndex(p => p.id === product.id);

                if (index > -1) {
                    basket.splice(index, 1);
                    delete basketCounts[product.id]
                }

                let totalProductCount = calculateTotalProductCount(basket);
                let totalProductPrice = calculateTotalProductPrice(basket);

                return {
                    ...state,
                    basket,
                    totalProductCount,
                    totalProductPrice
                }
            }
            default: {
                return state;
            }
        }
    }
);

export function useBasketTotalProductCount() {
    let totalProductCount = useSelector(state => state.totalProductCount);
    return totalProductCount;
}

export function useBasketTotalProductPrice() {
    let totalProductCount = useSelector(state => state.totalProductPrice);
    return totalProductCount;
}

export function useBasketState() {
    let basket = useSelector(state => state.basket);
    return basket;
}

export function useBasketCountsState() {
    let basketCounts = useSelector(state => state.basketCounts);
    return basketCounts;
}

export function useBasketActions() {
    const dispatch = useDispatch();

    return {
        addBasketItem(product) {
            dispatch({
                type: ADD_BASKET_ITEM,
                payload: product
            })
        },
        removeBasketItem(product) {
            dispatch({
                type: REMOVE_BASKET_ITEM,
                payload: product
            })
        }
    }
}


function calculateTotalProductCount(basket) {
    return basket
        .map(p => p.count)
        .reduce((a, b) => a + b, 0);
}

function calculateTotalProductPrice(basket) {
    return basket
        .map(p => p.count * p.price)
        .reduce((a, b) => a + b, 0);
}
