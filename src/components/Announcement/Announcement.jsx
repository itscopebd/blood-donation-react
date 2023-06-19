import React from 'react';
import { FaFacebook, FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from 'react-icons/fa';

const Announcement = () => {
    return (
      <div className=' bg-primary py-5'>
          <div className='flex justify-between items-center container mx-auto text-white'>
            <div className='flex gap-5'>
                <p> <strong className='font-primary font-medium'>Contact: </strong> Pabna, Santhia </p>
                <p> <strong className='font-primary font-medium'>Call Us: </strong> 01580495093 </p>

            </div>
            <div className='flex gap-5'>
              <li className='w-6 h-6 hover:text-primary cursor-pointer rounded-full bg-white flex justify-center items-center'>  <FaFacebookF className= 'text-black text-xs hover:text-primary'></FaFacebookF></li>
              <li className='w-6 h-6 hover:text-primary cursor-pointer rounded-full bg-white flex justify-center items-center'><FaTwitter className= 'text-black text-xs hover:text-primary'></FaTwitter></li>
              <li className='w-6 h-6 hover:text-primary cursor-pointer rounded-full bg-white flex justify-center items-center'><FaGoogle className= 'text-black text-xs hover:text-primary'></FaGoogle></li>
              <li className='w-6 h-6 hover:text-primary cursor-pointer rounded-full bg-white flex justify-center items-center'><FaYoutube className= 'text-black text-xs hover:text-primary'></FaYoutube></li>
              
            </div>
        </div>
      </div>
    );
};

export default Announcement;