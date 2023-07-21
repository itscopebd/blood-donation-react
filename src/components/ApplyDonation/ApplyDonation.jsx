
import donation from "../../assets/image/donation.png"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const ApplyDonation = () => {
    const [btnLoading, setBtnLoading] = useState(false)
    const [ message,setMessage ] = useState({})
    const { user } = useContext(AuthContext);
 
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {

        
        const saveDonationsInfo = { name: user?.displayName, image: user?.photoURL, phone: user?.phoneNumber, email:user?.email, bloodGroup: data.bloodgroup, paddress: data.paddress, parmanentAddress: data.parmanentAddress, gender: data.gender,isAdmin:false,isAuthor:false }
        console.log(saveDonationsInfo)
        fetch(`http://localhost:5000/addDonations?email=${user?.email}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(saveDonationsInfo)
        })
            .then(res => res.json())
            .then(data => {
                setMessage(data)
            })
    }
    return (
        <div>
            <div className='container mx-auto bg-gray-300 my-10'>
                <h3 className="text-3xl text-center pt-5 text-red-400">Apply Now Donation</h3>
                <div className="card p-10">
                    <div className='flex gap-10 items-center'>
                        <div className='w-6/12'>
                            <img className='w-full rounded-lg' src={donation} alt="" />
                        </div>
                        <div className='w-6/12'>
                            <div className='w-9/12 mx-auto'>
                                {
                                    message.acknowledged && message.acknowledged ? <h3 className="text-2xl text-green-600">Donar Alredy Registration !</h3>:"Not"
                                }
                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div className='w-full'>
                                        <label>Blood Group <span className='text-primary'>*</span> </label>
                                        <select className='select select-bordered w-full' {...register("bloodgroup", { required: true })}>
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    </div>
                                    <div className='w-full'>
                                        <label>Present Address <span className='text-primary'>*</span></label>
                                        <input type='text' {...register('paddress', { required: true })} placeholder="Present Address" className="input input-bordered w-full" />
                                    </div>

                                    <div className='w-full'>
                                        <label>Parmanent Address <span className='text-primary'>*</span></label>
                                        <input type='text' {...register('parmanentAddress', { required: true })} placeholder="Parnanent Address" className="file-input file-input-bordered w-full" />
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

                                    <div className='flex mt-3 gap-5 items-center'>
                                        {
                                            message.acknowledged && message.acknowledged?  <button disabled={true} type="submit" className='btn bg-primary capitalize text-white hover:bg-black border-none'> {btnLoading ? <span className="loading loading-spinner loading-md"></span>
                                            : "Submit"} </button> : <button type="submit" className='btn bg-primary capitalize text-white hover:bg-black border-none'> {btnLoading ? <span className="loading loading-spinner loading-md"></span>
                                            : "Submit"} </button>
                                        }
                                       

                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyDonation;