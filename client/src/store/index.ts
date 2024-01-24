import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from '../reducers/userReducer';
export interface RootState {
    user: {
        isAuth: boolean;
        user: any;
    };
}
const rootReducer = combineReducers({
    user: userReducer,
});

const storeEnhancer: StoreEnhancer = applyMiddleware(thunk);

const store = createStore<RootState, any, any, any>(
    rootReducer,
    compose(storeEnhancer)
);

export default store;
