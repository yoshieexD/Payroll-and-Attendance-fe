import { Types } from '../constants/actionTypes';

export const userAction = {
    login: (user: any) => ({ type: Types.LOGIN, payload: { user } }),
    updateUser: (user: any) => ({ type: Types.UPDATE_USER, payload: { user } }),
    updateProfilePicture: (newProfilePicture: string) => ({ type: Types.UPDATE_PROFILE_PICTURE, payload: { newProfilePicture } }),
    logout: () => ({ type: Types.LOGOUT }),
};
