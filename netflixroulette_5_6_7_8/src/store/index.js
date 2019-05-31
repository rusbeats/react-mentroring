import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const makeStore = initialState => {
    return createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};
