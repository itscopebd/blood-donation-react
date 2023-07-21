import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useSWR from 'swr';
import { ScaleLoader } from "react-spinners";
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const { data, error, isLoading } = useSWR(`http://localhost:5000/userCheck?email=${user?.email}`, fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div className="absolute top-2/4 translate-y-2/4 left-2/4 translate-x-2/4"> 
    <ScaleLoader color="#36d7b7" /></div>


    return (
        <div>


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">

                        {/* Sidebar content here */}

                        {/* admin side bar  */}
                        {
                            data.role === 'admin'
                                ?
                                <>
                                    <li><Link to="/dashboard">Admin Home</Link></li>
                                    <li><Link to='/dashboard/applydonation'>All Donation</Link></li></> : data.role === 'author'
                                    ?
                                    <> <li><Link to="/dashboard">Author Home</Link></li>
                                        <li><Link to='/dashboard/applydonation'>Details</Link></li></>
                                    :
                                    <><li><Link to="/dashboard">User Home</Link></li>
                                        <li><Link to='/dashboard/applydonation'>Apply Donation</Link></li></>
                        }




                        <div className="divider"></div>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;