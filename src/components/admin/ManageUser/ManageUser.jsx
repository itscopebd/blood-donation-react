import React from 'react';

import useSWR from 'swr';
import { ScaleLoader } from "react-spinners";
const fetcher = (...args) => fetch(...args).then(res => res.json())

const ManageUser = () => {
    const { data, error, isLoading } = useSWR('http://localhost:3000/users', fetcher)

    if (error) return <div className="absolute top-2/4 translate-y-2/4 left-2/4 translate-x-2/4">failed to load</div>
    if (isLoading) return <div className="absolute top-2/4 translate-y-2/4 left-2/4 translate-x-2/4">
        <ScaleLoader color="#36d7b7" /></div>

    // handle user delete 
    const handleUserDelete = (id) => {
        fetch(`http://localhost:3000/users/delete/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
    }


    return (
        <div className='container mx-auto'>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='font-bold text-md text-black'>Image</th>
                            <th className='font-bold text-md text-black'>Name</th>
                            <th className='font-bold text-md text-black'>Phone</th>
                            <th className='font-bold text-md text-black'>Email</th>
                            <th className='font-bold text-md text-black'>Gender</th>
                            <th className='font-bold text-md text-black'>User Id</th>
                            <th className='font-bold text-md text-black'>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {

                            data.map(user =>
                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>{user.name}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gendar}</td>
                                    <td>{user.userId}</td>
                                    <td><button onClick={() => handleUserDelete(user._id)} className="btn btn-sm bg-primary capitalize text-white hover:bg-black">Delete</button></td>

                                </tr>

                            )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUser;