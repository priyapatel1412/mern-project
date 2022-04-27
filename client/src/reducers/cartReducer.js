import {
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  EMPTY_CART,
  REMOVE_ITEM_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstant";

export const addToCartReducer = (state = { cartItems: [] }, action) => {
  console.log(action.type, action.payload);
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      //check if item already exist in cart
      const isItemExist = state.cartItems.find(
        (i) => i.product == item.product
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: action.payload,
      };
    case ADD_TO_CART_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
