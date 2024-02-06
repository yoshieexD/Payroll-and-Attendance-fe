import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import EmployeeTable from "../table/EmployeeTable";
import { useState } from "react";
import usePost from "../api/usePost";
import { toast } from 'react-hot-toast';

const Main = () => {
    const [data, setData] = useState({ email: '', name: '', employmentType: '' })
    const openModal = (status: String) => {
        const modal = document.getElementById('add_employee') as HTMLDialogElement;
        status === 'open' ? modal.showModal() : modal.close();
    }

    const auth = useSelector((state: RootState) => state.user);

    const handleChange = (event: any) => {
        const { name, value } = event.target;

        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }

    const post: any = usePost({
        url: '/employee/add',
        datas: data,
        onSuccess: () => {
            toast.success('Successfully added employee');
        },
        errors: 'Uncaught error',
    })
    return (
        <Layout classname="overflow-hidden">
            {auth.isAuth === true ?
                <div className="py-2 flex flex-col h-full w-full items-center space-y-2">
                    <div className="w-[80%]">
                        <button className="btn btn-active btn-primary" onClick={() => openModal('open')}>Add Employee</button>
                    </div>
                    <div className="w-[80%]">
                        <EmployeeTable />
                        <dialog id="add_employee" className="modal">
                            <div className="modal-box">
                                <form className='space-y-2' onSubmit={(event) => { event.preventDefault(); post.mutate(); }} >
                                    <input type="email" placeholder="Email" className="input input-bordered w-full" name="email" value={data.email} onChange={handleChange} />
                                    <input type="text" placeholder="Last Name, First Name M.I" className="input input-bordered w-full" name="name" value={data.name} onChange={handleChange} />
                                    <details className="dropdown">
                                        <summary className="m-1 btn">{data.employmentType || 'Select Employment Type'}</summary>
                                        <select onChange={handleChange} name="employmentType" >
                                            <option value={"Full Time"}>Full Time</option>
                                            <option value={"Part Time"}>Part Time</option>
                                            <option value={"Internship"}>Internship</option>
                                        </select>
                                    </details>
                                    <button className="btn btn-primary w-full" >Submit</button>
                                </form>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button onClick={() => openModal('close')}>close</button>
                            </form>
                        </dialog>

                    </div>
                </div >
                :
                <div className="grid place-items-center  h-screen overflow-hidden ">
                    <p className="text-3xl font-bold">You need to login first</p>
                </div>
            }
        </Layout >
    );
};

export default Main;