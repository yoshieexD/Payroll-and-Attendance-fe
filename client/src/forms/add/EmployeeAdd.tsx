import { useState } from "react"
import { IEmployee } from '../../interface/Interface';
import usePost from "../../api/usePost";
import { toast } from 'react-hot-toast';

function EmployeeAdd() {
    const [formValue, setFormValue] = useState({ email: '', name: '', startDate: '', employmentType: '' });
    const inputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }

    const post: any = usePost({
        url: '/employee/add',
        datas: formValue,
        onSuccess: () => {
            toast.success('Successfully added employee');
            const modal = document.getElementById('add_employee') as HTMLDialogElement;
            modal.close();

        },
        errors: 'Uncaught error',
        query: 'get-employee',
    })
    return (
        <div className="modal-box">

            <form className='space-y-2' onSubmit={(event) => { event.preventDefault(); post.mutate(); }} >
                <input type="email" placeholder="Email" className="input input-bordered w-full" name="email" value={formValue.email} onChange={inputChange} />
                <input type="text" placeholder="Last Name, First Name M.I" className="input input-bordered w-full" name="name" value={formValue.name} onChange={inputChange} />
                <details className="dropdown">
                    <summary className="m-1 btn">{formValue.employmentType || 'Select Employment Type'}</summary>
                    <select onChange={inputChange} name="employmentType" >
                        <option value={"Full Time"}>Full Time</option>
                        <option value={"Part Time"}>Part Time</option>
                        <option value={"Internship"}>Internship</option>
                    </select>
                </details>
                <button className="btn btn-primary w-full" >Submit</button>
            </form>
        </div>
    )
}

export default EmployeeAdd