
import { useContext, useState } from 'react';
import registration from '../../assets/image/registration.jpg';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const SingUp = () => {
    const { createUser, UpdateUserProfile, singInWithGoogle } = useContext(AuthContext);
    const [matchPassword, setMatchPassword] = useState('');
    const [btnLoading, setBtnLoading] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const Image_Host_key = import.meta.env.VITE_IMAGE_HOST_SECRECT_KEY;

    const { register, handleSubmit, formState: { errors }, } = useForm();

    // singin with google 

    const singGoogle = () => {
        setBtnLoading(true)

        singInWithGoogle()
            .then(res => {
                setBtnLoading(false)

            })
            .catch(error => console.log(error))
    }

    // Registration with email and password 

    const onSubmit = data => {

        const unique_id = uuid();
        const createUserId = unique_id.slice(0, 4)
        console.log(data)
        const email = data.email;
        const fromData = new FormData();
        fromData.append('image', data.image[0])
        const imageHostUrl = `https://api.imgbb.com/1/upload?key=${Image_Host_key}`
        const password = data.password;
        const cpassword = data.cpassword;
        if (password !== cpassword) {
            setMatchPassword("Password Not Match!!");
            return;
        }
        setBtnLoading(true)
        createUser(email, password)
            .then(res => {


                fetch(imageHostUrl, {
                    method: "POST",
                    body: fromData
                }).then(res => res.json())
                    .then(resImage => {
                        console.log(resImage)

                        const imgUrl = resImage.data.display_url;
                        UpdateUserProfile(data.name, imgUrl)

                        // save user information data database 
                        const saveData = { userId: createUserId, name: data.name, email: email, image: imgUrl, phone: data.phone, gendar: data.gender,role:"user" }
                        fetch('http://localhost:3000/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveData)
                        })
                            .then(res => res.json())
                            .then(data => {

                                Swal.fire({
                                    title: 'Registration Success!!',
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    }
                                })

                                setBtnLoading(false)
                                navigate("/")
                            })

                    }).catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
        
    }
    return (
        <div>
            <div className='container mx-auto my-20'>
                <div className="card bg-gray-300 p-10">
                    <div className='flex gap-10 items-center'>
                        <div className='w-6/12'>
                            <img className='w-full rounded-lg' src={registration} alt="" />
                        </div>
                        <div className='w-6/12'>
                            <div className='w-9/12 mx-auto'>
                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div className='w-full'>
                                        <label>Name <span className='text-primary'>*</span> </label>
                                        <input type='text' {...register('name', { required: true })} placeholder='Name' className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Email <span className='text-primary'>*</span></label>
                                        <input type='email' {...register('email', { required: true })} placeholder="Email" className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Password <span className='text-primary'>*</span></label>
                                        <input type='password' {...register('password', {
                                            required: true,
                                            pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])/
                                        })} placeholder="Password" className="input input-bordered w-full" />
                                        {
                                            errors.password?.type === 'pattern' && <p className='text-red-500'>Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:</p>
                                        }
                                        {
                                            matchPassword && <p className='text-red-500'>{matchPassword}</p>
                                        }
                                    </div>
                                    <div className='w-full'>
                                        <label>Confirm Password <span className='text-primary'>*</span></label>
                                        <input type='password' {...register('cpassword', { required: true })} placeholder="Password" className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Photo <span className='text-primary'>*</span></label>
                                        <input type='file' {...register('image', { required: true })} placeholder="Photo" className="file-input file-input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Phone number <span className='text-primary'>*</span></label>
                                        <input type='number' {...register('phone', { required: true })} placeholder="Enter Your Phone Number" className="file-input file-input-bordered w-full" />
                                    </div>
                                    <div className='mb-5 w-full'>
                                        <label className=''>Gender <span className='text-primary'>*</span></label>
                                        <select className='select select-bordered w-full' {...register("gender", { required: true })}>
                                            <option value="">Select Gender</option>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className='flex gap-5 items-center'>
                                        <button type="submit" className='btn bg-primary capitalize text-white hover:bg-black border-none'> {btnLoading ? <span className="loading loading-spinner loading-md"></span>
                                            : "Submit"} </button>
                                        <p>Already have an account? <Link className='text-red-500' to="/login">LogIn Now</Link> </p>
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

export default SingUp;