import { SEARCH_ELEMENT,SET_PRODUCTS,SET_FILTER,SET_SORT, ADD_CART_PRODUCT, REMOVE_CART_PRODUCT, CHANGE_QUANTITY_PRODUCT } from '../constants/action-types'

const initialState = {
    products:[],
    searchElement:'',
    filter:{type:'',filterOption:''},
    changeFilter:'',
    sort:'',
    cart: []
}

function rootReducer(state = initialState,action){
    if(action.type===SEARCH_ELEMENT){
        return Object.assign({}, state, {
            searchElement: action.payload
        });
    }
    else if(action.type===SET_PRODUCTS){
        return Object.assign({}, state, {
            products: action.payload
        });
    }
    else if(action.type===SET_FILTER){
        return Object.assign({}, state, {
            filter: action.payload
        });
    }
    else if(action.type===SET_SORT){
        return Object.assign({}, state, {
            sort: action.payload
        });
    }
    else if(action.type==='changeFilter'){
        return Object.assign({}, state, {
            changeFilter: action.payload
        });
    } else if (action.type===ADD_CART_PRODUCT){
        const product = state.cart.find(item => {
            if (item.id === action.payload.id) 
                return item;
        })
        if (product) {
            product.quantity = product.quantity + 1;
            const products = state.cart.filter(product => {
                return product.id !== action.payload;
            })
            return Object.assign({}, state, {
                cart: [...products, product]
            })
        } else {
            return Object.assign({}, state, {
                cart: [...state.cart, {...action.payload, quantity: 1}]
            })
        }

    }else if (action.type===REMOVE_CART_PRODUCT){
        return Object.assign({}, state, {
            cart: state.cart.filter(product => {
                return product.id !== action.payload;
            })
        })
    } else if (action.type === CHANGE_QUANTITY_PRODUCT){
        const product = state.cart.find(item => {
            if (item.id === action.payload.productId) 
                return item;
        })
        const products = state.cart.filter(product => {
            return product.id !== action.payload.productId;
        })
        return Object.assign({}, state, {
            cart: [...products, { ...product, quantity: Number.parseInt(action.payload.quantity) }]
        })
    }
    return state;
}

export default rootReducer;