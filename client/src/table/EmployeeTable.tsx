import { IEmployee } from '../interface/Interface'
import useGet from "../api/useGet";
import { useState } from 'react';
import useDelete from '../api/useDelete';
import { toast } from 'react-hot-toast';



function EmployeeTable() {
    const { data } = useGet({ getQuery: 'get-employee', url: '/employee/get' })
    const [ids, setIds] = useState('');
    const [open, setOpen] = useState('');

    const deletes: any = useDelete({
        url: `/employee/delete/${ids}`,
        onSuccess: () => {
            toast.success('Successfully deleted employee');
        },
        query: 'get-employee',
        errors: 'You don\'t have admin privileges',
    });

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>Count</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Employment Type</th>
                        <th>Action</th>
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
                                    <td className='space-x-2'>
                                        <button className="btn btn-accent" onClick={async () => { await setIds(e._id); setOpen('open') }}>View</button>
                                        <button className="btn btn-error" onClick={async () => { await setIds(e._id); deletes.mutate(); }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className='text-center'> No data found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;
