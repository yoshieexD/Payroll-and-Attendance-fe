import { useState } from 'react';
import http from '../api/http-common';
import { useMutation } from 'react-query';
const Header = () => {
    const [data, setData] = useState({ userName: '', password: '' })
    const openModal = (status: string) => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
        status === 'open' ? modal.showModal() : modal.close();
    };
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
    const post = useMutation(
        async () => {
            const response = await http.post('/auth/login', data);
            return response.data;
        },
        {
            onSuccess: (data) => {
                console.log('Login successful', data);
            },
            onError: (error) => {
                console.error('Login error', error);
            },
        }
    )
    const handleSubmit = (event: any) => {
        event.preventDefault();
        post.mutate();
    }
    return (
        <div className='w-full flex justify-center pb-2 shadow-md'>
            <div className="w-11/12 flex justify-between pt-2">
                <div>Logo</div>
                <div>
                    <button className="btn btn-neutrals" onClick={() => openModal('open')}>
                        Login
                    </button>
                </div>
            </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello, Welcome Back!</h3>
                    <form className='space-y-2' onSubmit={handleSubmit}>
                        <input type="text" placeholder="Username" className="input input-bordered w-full" name='userName' value={data.userName} onChange={handleChange} />
                        <input type="password" placeholder="Password" className="input input-bordered w-full" name='password' value={data.password} onChange={handleChange} />
                        <button className="btn btn-primary w-full">Login</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => openModal('close')}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Header;
