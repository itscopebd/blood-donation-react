import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/image/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const NavBar = () => {

    const { user, userOut } = useContext(AuthContext);
    const navigate = useNavigate()
    const singOut = () => {
        userOut()
        userOut()
            .then(data => {
                navigate("/login")
            }).catch(error => {

            })
    }

    const navBar = <>

        <li><a className='font-medium text-lg hover:bg-transparent hover:text-primary'>Home</a></li>
        <li><a className='font-medium text-lg hover:bg-transparent hover:text-primary'>Find Donar</a></li>
        <li><a className='font-medium text-lg hover:bg-transparent hover:text-primary'>Campain</a></li>
        <li><a className='font-medium text-lg hover:bg-transparent hover:text-primary'>About Us</a></li>
        <li><a className='font-medium text-lg hover:bg-transparent hover:text-primary'>Contact Us</a></li>
        {
            user && user ? <li><Link to='/dashboard' className='font-medium text-lg hover:bg-transparent hover:text-primary'>Dashboard</Link></li> : ""
        }



    </>

    return (
        <div className=' border-b-2 border-b-gray-100'>

            <div className='container mx-auto'>
                <div className="navbar bg-base-100 px-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {navBar}
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case pl-0 hover:bg-transparent text-xl">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navBar}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <ul>
                            {
                                user && user ? <div className='flex gap-2 items-center'> <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />

                                    </div>
                                </label>
                                    <button onClick={singOut} className="btn btn-sm bg-primary text-white capitalize hover:bg-black">Log OUt</button>
                                </div>
                                    :
                                    <li> <Link to="/login" className="btn btn-sm bg-primary text-white hover:bg-black">LogIn</Link></li>
                            }


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;