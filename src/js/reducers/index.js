import {
  SEARCH_ELEMENT,
  CATEGORY_GROUP,
  CATEGORY_ELEMENT,
  SET_PRODUCTS,
  SET_FILTER,
  SET_SORT,
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  CHANGE_QUANTITY_PRODUCT,
  ADD_COMMENT
} from "../constants/action-types";

const INITIAL_STATE = {
  products: [],
  searchElement: "",
  filter: { type: "", filterOption: "" },
  changeFilter: "",
  sort: "",
  categoryGroup: "",
  categoryElement: "",
  cart: []
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_ELEMENT: {
      return { ...state, searchElement: action.payload };
    }
    case CATEGORY_GROUP: {
      return { ...state, categoryGroup: action.payload };
    }
    case CATEGORY_ELEMENT: {
      return { ...state, categoryElement: action.payload };
    }
    case SET_PRODUCTS: {
      return { ...state, products: action.payload };
    }
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case SET_SORT: {
      return { ...state, sort: action.payload };
    }
    case "changeFilter": {
      return { ...state, changeFilter: action.payload };
    }
    case ADD_CART_PRODUCT: {
      const product = state.cart.find(item => {
        if (item.id === action.payload.id) return item;
      });
      if (product) {
        product.quantity = product.quantity + 1;
        const products = state.cart.filter(product => {
          return product.id !== action.payload;
        });
        return Object.assign({}, state, {
          cart: [...products]
        });
      } else {
        return Object.assign({}, state, {
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        });
      }
    }
    case REMOVE_CART_PRODUCT: {
      return Object.assign({}, state, {
        cart: state.cart.filter(product => {
          return product.id !== action.payload;
        })
      });
    }
    case CHANGE_QUANTITY_PRODUCT: {
      const product = state.cart.find(item => {
        if (item.id === action.payload.productId) return item;
      });
      const products = state.cart.filter(product => {
        return product.id !== action.payload.productId;
      });
      return Object.assign({}, state, {
        cart: [
          ...products,
          { ...product, quantity: Number.parseInt(action.payload.quantity) }
        ]
      });
    }
    case ADD_COMMENT: {
      const { products } = state;
      const { productId, comment } = action.payload;

      return Object.assign({}, state, {
        products: products.map(product =>
          product.id === productId
            ? {
                ...product,
                comments: [...product.comments, comment]
              }
            : product
        )
      });
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
