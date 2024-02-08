import Layout from "../layout/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import EmployeeTable from "../table/EmployeeTable";
import { useState } from "react";
import usePost from "../api/usePost";
import { toast } from 'react-hot-toast';
import Body from "../layout/Body";
import EmployeeAdd from "../forms/add/EmployeeAdd";

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

    return (
        <Layout classname="overflow-hidden">
            {auth.isAuth === true ?
                <Body >
                    <div className="w-[80%]">
                        <button className="btn btn-active btn-primary" onClick={() => openModal('open')}>Add Employee</button>
                    </div>
                    <div className="w-[80%]">
                        <EmployeeTable />
                        <dialog id="add_employee" className="modal">
                            <EmployeeAdd />
                            <form method="dialog" className="modal-backdrop">
                                <button onClick={() => openModal('close')}>close</button>
                            </form>
                        </dialog>

                    </div>
                </Body>
                :
                <div className="grid place-items-center  h-screen overflow-hidden ">
                    <p className="text-3xl font-bold">You need to login first</p>
                </div>
            }
        </Layout >
    );
};

export default Main;