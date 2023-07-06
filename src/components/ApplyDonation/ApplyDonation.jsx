
import donation from "../../assets/image/donation.png"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const ApplyDonation = () => {
    const [btnLoading, setBtnLoading] = useState(false)
    const { userData } = useLoaderData()
    const { user } = useContext(AuthContext);

    const [donarInfo, setDonarInfo] = useState({})
    console.log(userData)
    // get user data 

    // fetch(`http://localhost:5000/users/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setDonarInfo(data)
    //     })

    console.log(user)

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {

        console.log(data)
        const saveDonationsInfo = { name: donarInfo?.name, image: donarInfo?.image, phone: donarInfo?.phone, bloodGroup: data.bloodgroup, paddress: data.paddress, parmanentAddress: data.parmanentAddress, gender: donarInfo?.gender }
        console.log(saveDonationsInfo)
        fetch('http://localhost:5000/donations', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(saveDonationsInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div className='w-full'>
                                        <label>Blood Group <span className='text-primary'>*</span> </label>
                                        <select value={donarInfo?.gender} className='select select-bordered w-full' {...register("bloodgroup", { required: true })}>
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


                                    <div className='flex mt-3 gap-5 items-center'>
                                        <button type="submit" className='btn bg-primary capitalize text-white hover:bg-black border-none'> {btnLoading ? <span className="loading loading-spinner loading-md"></span>
                                            : "Submit"} </button>

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