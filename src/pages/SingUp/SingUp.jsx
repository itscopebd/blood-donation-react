import registration from '../../assets/image/registration.jpg';
import { useForm } from 'react-hook-form';
const SingUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
        console.log(data)
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
                                        <input type='text' {...register('firstName', { required: true })} placeholder='Name' className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Email <span className='text-primary'>*</span></label>
                                        <input type='email' {...register('email', { required: true })} placeholder="Email" className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Password <span className='text-primary'>*</span></label>
                                        <input type='password' {...register('password', { required: true })} placeholder="Password" className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Confirm Password <span className='text-primary'>*</span></label>
                                        <input type='password' {...register('cpassword', { required: true })} placeholder="Password" className="input input-bordered w-full" />
                                    </div>
                                    <div className='w-full'>
                                        <label>Photo <span className='text-primary'>*</span></label>
                                        <input type='file' {...register('photo', { required: true })} placeholder="Photo" className="file-input file-input-bordered w-full" />
                                    </div>
                                    <div className='my-5 w-full'>
                                        <label className=''>Gender <span className='text-primary'>*</span></label>
                                        <select className='select select-bordered w-full' {...register("gender", { required: true })}>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <input type="submit" className='btn bg-primary text-white hover:bg-black border-none' />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;