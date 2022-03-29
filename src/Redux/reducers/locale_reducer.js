import * as actionTypes from '../actions';

// Get currentLocale from Cookie
// var currentLocale = localStorage.getItem('currentLocale');

// Define initialState
const initialState = {
    locale: 'en'
    // currentLocale ? currentLocale : 'ar',
}

// Define the Reducer
export default function locale_reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.Change_Current_Locale:
            // localStorage.setItem('currentLocale', action.locale);
            return {
                ...state,
                locale: action.locale,
            }
        default:
            return state;
    }
};
