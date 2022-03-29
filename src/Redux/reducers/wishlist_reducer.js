import * as actionTypes from '../actions';

// Define initialState
const initialState = {
    products: [],
}

// Define the Reducer
export default function wishlist_reducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.Save_Wishlist_Products:
            return {
                ...state,
                products: action.products
            }
        
        default:
            return state;
    }
};
