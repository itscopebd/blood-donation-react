import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import login from "../../assets/image/login.png"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const { loginWithPasswordAndEmail, singInWithGoogle } = useContext(AuthContext);
    const [btnLoading, setBtnLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();


    // singin with google 
    const singGoogle = () => {
        setBtnLoading(true)
        singInWithGoogle()
            .then(res => {
                setBtnLoading(false)
                navigate('/')
            })
            .catch(error => console.log(error))
    }

    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        loginWithPasswordAndEmail(email, password)
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log In SuccessFully !!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                 navigate('/')

            }).catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='container mx-auto my-20'>
                <div className="card bg-gray-300 p-10">
                    <div className='flex gap-10 items-center'>
                        <div className='w-6/12'>
                            <img className='w-full rounded-lg' src={login} alt="" />
                        </div>
                        <div className='w-6/12'>
                            <div className='w-9/12 mx-auto'>
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className='w-full'>
                                        <label>Email <span className='text-primary'>*</span></label>
                                        <input type='email' {...register('email', { required: true })} placeholder="Email" className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Password <span className='text-primary'>*</span></label>
                                        <input type='password' {...register('password', {
                                            required: true
                                        })} placeholder="Password" className="input input-bordered w-full" />
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                    <button type="submit" className='btn mt-2 bg-primary capitalize text-white hover:bg-black border-none'> {btnLoading ? <span className="loading loading-spinner loading-md"></span>
                                        : "LogIn"} </button>
                                        <p>Don't have an account? <Link className='text-red-500' to="/singup">Registration Now</Link> </p>
                                    </div>
                                </form>
                            </div>
                            <div className='text-center'>
                                <h4 className='text-center text-2xl text-black'>Or</h4>
                                <div className="divider my-0.5"></div>
                                <button onClick={singGoogle} className="btn btn-circle btn-outline">
                                    {btnLoading ? <span className="loading loading-spinner loading-md"></span>
                                        : <FaGoogle></FaGoogle>}
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;