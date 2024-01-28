import { createStore, combineReducers, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { thunk } from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import employeeReducer from '../reducers/employeeReducer';

export interface RootState {
    user: {
        isAuth: boolean;
        user: any;
    };
    employee: {
        employees: any[];
        employeeId: number | null;
    };
}

const rootReducer = combineReducers({
    user: userReducer,
    employee: employeeReducer,
});

const storeEnhancer: StoreEnhancer = applyMiddleware(thunk);

const store = createStore<RootState, any, any, any>(
    rootReducer,
    compose(storeEnhancer)
);

export default store;
