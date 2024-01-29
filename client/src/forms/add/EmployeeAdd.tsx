import { useState } from "react"
import { IEmployee } from '../../interface/Interface';
import usePost from "../../api/usePost";
import { toast } from 'react-hot-toast';
interface Iprops {
    onAddEmployee: (employee: IEmployee) => void;
}
function EmployeeAdd() {
    const [formValue, setFormValue] = useState({ email: '', name: '', startDate: '', employmentType: '' });
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }
    const post: any = usePost({
        url: '/employee/add',
        datas: formValue,
        onSuccess: () => {
            toast.success('Successfully added new Employee');
        },
        errors: 'Something went wrong...',
    })
    return (
        <div>Add Employee
            <form onSubmit={(event) => { event.preventDefault(); post.mutate }}>
                <input type="text" placeholder="Email" name="email" value={formValue.email} onChange={inputChange} className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Name" name="name" value={formValue.name} onChange={inputChange} className="input input-bordered w-full max-w-xs" />
                <input type="date" placeholder="Starting Date" value={formValue.startDate} name="startDate" onChange={inputChange} className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Employement Type" name="employmentType" value={formValue.employmentType} onChange={inputChange} className="input input-bordered w-full max-w-xs" />
            </form>
        </div>
    )
}

export default EmployeeAdd