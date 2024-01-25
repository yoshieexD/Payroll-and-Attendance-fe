import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../actions/userAction';
import { RootState } from '../store';
import { MdOutlineArrowDropDown } from "react-icons/md";
import usePost from '../api/usePost';
const Header = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.user);
    const [tooltip, setTooltip] = useState(false);
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

    const post: any = usePost({
        url: '/auth/login',
        datas: data,
        onSuccess: (data) => {
            dispatch(userAction.login(data.auth));
            const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
            modal.close();
        },
        errors: 'Invalid Credentials',
    });

    const tooltipElement = document.querySelector('[data-tip="Logout"]') as HTMLElement;

    tooltipElement?.addEventListener('click', () => {
        dispatch(userAction.logout());
    });

    return (
        <div className='w-full flex justify-center pb-2 shadow-md'>
            <div className="w-11/12 flex justify-between pt-2">
                <div>Logo</div>
                <div className='cursor-pointer'>
                    {auth?.isAuth === true ? <p className='py-2  flex space-x-2 items-center'>{auth?.user.username}
                        <div className={`tooltip  tooltip-bottom  ${tooltip ? 'tooltip-open' : ''}`} data-tip="Logout"
                        >
                            <MdOutlineArrowDropDown onClick={() => setTooltip(tooltip === true ? false : true)} />
                        </div>
                    </p> :
                        <button className="btn btn-neutrals" onClick={() => openModal('open')}>
                            Login
                        </button>}
                </div>
            </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello, Welcome Back!</h3>
                    <form className='space-y-2' onSubmit={(event) => { event.preventDefault(); post.mutate(); }}>
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
