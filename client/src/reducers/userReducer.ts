import { Types } from '../constants/actionTypes';

const initialState = {
    userName: '',
    email: '',
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                user: action.payload.user,
            };
        case Types.UPDATE_USER:
            return {
                ...state,
                user: action.payload.user,
            };
        case Types.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;
