import team1 from '../../assets/image/team1.png';
import team2 from '../../assets/image/team2.png';
import team3 from '../../assets/image/team3.png';

import { FaBeer, FaFacebookF, FaGoogle, FaLinkedin, FaTwitter } from 'react-icons/fa';
const OurVolunteerCardOne = () => {
    return (
        <div className=''>

            <div className='flex gap-10'>
                <div className="card border-gray-100 border-2 mr-5">
                    <figure><img src={team1} alt="img" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-center block">ALEXANDER GARY</h2>
                        <p>CO-FOUNDER</p>

                        <div className="card-actions justify-center">
                            <ul className='flex gap-5'>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaFacebookF></FaFacebookF></a> </li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaTwitter></FaTwitter></a></li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaGoogle></FaGoogle></a></li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaLinkedin></FaLinkedin></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="card border-gray-100 border-2 mr-5">
                    <figure><img src={team2} alt="img" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-center block">MELISSA MUNOZ</h2>
                        <p>FOUNDER</p>

                        <div className="card-actions justify-center">
                            <ul className='flex gap-5'>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaFacebookF></FaFacebookF></a> </li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaTwitter></FaTwitter></a></li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaGoogle></FaGoogle></a></li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaLinkedin></FaLinkedin></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="card border-gray-100 border-2 mr-5">
                    <figure><img src={team3} alt="img" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title text-center block">JOHN ABRAHAM</h2>
                        <p>MANAGER</p>

                        <div className="card-actions justify-center">
                            <ul className='flex gap-5'>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaFacebookF></FaFacebookF></a> </li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaTwitter></FaTwitter></a></li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaGoogle></FaGoogle></a></li>
                                <li className='w-8 justify-center h-10 border flex items-center hover:text-primary transition-all hover:border-primary'><a href=""><FaLinkedin></FaLinkedin></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurVolunteerCardOne;