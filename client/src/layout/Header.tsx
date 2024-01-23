import http from '../api/http-common';
const Header = () => {
    const openModal = (status: string) => {
        const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
        status === 'open' ? modal.showModal() : modal.close();
    };

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
                    <div className="space-y-2">
                        <input type="text" placeholder="Username" className="input input-bordered w-full" />
                        <input type="password" placeholder="Password" className="input input-bordered w-full" />
                        <button className="btn btn-primary w-full">Login</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => openModal('close')}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Header;
