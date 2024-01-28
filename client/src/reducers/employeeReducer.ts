import { Types } from '../constants/actionTypes';

type InitialState = {
    employees: any[],
    employeeId: null | number,
}

const employeeReducer = (state: InitialState, action: any) => {
    switch (action.type) {
        case Types.ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.payload.employee],
            }
        case Types.UPDATE_EMPLOYEE:
            const updatedEmployees = state.employees.map((employee: any) =>
                employee.id === action.payload.employee.id ? action.payload.employee : employee
            );

            return {
                ...state,
                employees: updatedEmployees,
            };
        case Types.DELETE_EMPLOYEE:
            const employeeIdToDelete = action.payload.employeeId;

            return {
                ...state,
                employees: state.employees.filter((employee: any) => employee.id !== employeeIdToDelete),
            };

        default:
            return state || null;
    }
}

export default employeeReducer;