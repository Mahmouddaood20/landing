import * as actionTypes from '../actions';

// Define initialState
const initialState = {
    avatar: null,
    fullName: localStorage.getItem('fullName') ?? "",
    mobile: localStorage.getItem('mobile') ?? "",
    email: localStorage.getItem('email') ?? "",
    isGuest: null,
    addresses: [],
    cars: [],
    selectedCar: typeof localStorage.getItem('selectedCar') === 'object' ? JSON.parse(localStorage.getItem('selectedCar')) : null
}

// Define the Reducer
export default function profile_reducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.Save_User_Info:
            localStorage.setItem('fullName', action.fullName)
            localStorage.setItem('mobile', action.mobile)
            localStorage.setItem('email', action.email)
            return {
                ...state,
                avatar: action.avatar,
                fullName: action.fullName,
                mobile: action.mobile,
                email: action.email,
                isGuest: action.isGuest,
            }
        
        case actionTypes.Save_Addresses:
            return {
                ...state,
                addresses: action.addresses,
            }
        
        case actionTypes.Add_New_Address:
            return {
                ...state,
                addresses: [...state.addresses, action.address],
            }
        
        case actionTypes.Save_Cars:
            return {
                ...state,
                cars: action.cars,
            }
        
        case actionTypes.Add_New_Car:
            return {
                ...state,
                cars: [...state.cars, action.car],
            }
        
        case actionTypes.Save_Selected_Car:
            localStorage.setItem('selectedCar', JSON.stringify(action.selectedCar))
            return {
                ...state,
                selectedCar: action.selectedCar,
            }
        
        case actionTypes.Delete_Selected_Car:
            localStorage.removeItem('selectedCar')
            return {
                ...state,
                selectedCar: null,
            }
        
        case actionTypes.Clear_Profile_Data:
            localStorage.removeItem('selectedCar')
            localStorage.removeItem('fullName')
            localStorage.removeItem('mobile')
            localStorage.removeItem('email')
            return {
                ...state,
                avatar: null,
                fullName: null,
                mobile: null,
                email: null,
                isGuest: null,
                addresses: [],
                cars: [],
                selectedCar: null
            }
        
        default:
            return state;
    }
};
