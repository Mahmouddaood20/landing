import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import locale_reducer from './reducers/locale_reducer';

const middlewares = [];

// Redux: Combine Multiple Reducers together.
const rootReducer = combineReducers({
    locale_reducer
});
  
// Redux: Setup Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux: Setup the Store
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;