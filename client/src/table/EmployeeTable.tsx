import { IEmployee } from '../interface/Interface'
import useGet from "../api/useGet";


function EmployeeTable() {
    const { data } = useGet({ getQuery: 'get-employee', url: '/employee/get' })
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Employment Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length > 0 ? (
                            data?.map((e: IEmployee, index: number) => (
                                <tr key={e._id}>
                                    <th>{index + 1}</th>
                                    <td>{e.email}</td>
                                    <td>{e.name}</td>
                                    <td>{e.employmentType}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}> No data found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;
