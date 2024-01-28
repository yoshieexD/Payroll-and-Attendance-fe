import { Types } from '../constants/actionTypes';

export const employeeAction = {
    addEmployee: (employee: any) => ({ type: Types.ADD_EMPLOYEE, payload: { employee } }),
    updateEmployee: (employee: any) => ({ type: Types.UPDATE_EMPLOYEE, payload: { employee } }),
    deleteEmployee: (employeeId: any) => ({ type: Types.DELETE_EMPLOYEE, payload: { employeeId } })
};