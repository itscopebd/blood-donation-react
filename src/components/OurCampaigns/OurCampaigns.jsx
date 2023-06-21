import campaing1 from "../../assets/image/campaign1.png";
import event2 from "../../assets/image/event_2.png";
import event_3 from "../../assets/image/event_3.png";
import event_4 from "../../assets/image/event_4.png";
import { FaLocationArrow, FaRegClock } from 'react-icons/fa';

const OurCampaigns = () => {
    
    return (
        <div className='container mx-auto my-32'>
             <h3 className='text-center text-6xl text-primary mt-16 mb-5'>DONATION CAMPAIGNS</h3>
               <p className='text-center mb-16 text-xl'>Campaigns to encourage new donors to join and existing to continue to give blood.</p>
            <div className='grid lg:grid-cols-2 gap-10 sm:grid-cols-1'>



                <div className="flex items-center bg-gray-200 rounded-lg">
                    <div className="w-5/12">
                        <figure><img className="rounded-md" src={campaing1} alt="Album" /></figure>
                    </div>
                    

                    <div className="py-5 w-7/12 px-10">
                        <a href="" className="hover:bg-black bg-primary text-white w-52 py-3 px-5 text-center rounded-md">25, June, 2023</a>
                        <h2 className="card-title mt-10 text-primary text-xl">WORLD BLOOD DONORS DAY</h2>
                        <p className="text-lg my-5">Every year, on 14 June, countries around the world celebrate World Blood Donor Day.  The event serves to thank voluntary.</p>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"> <FaRegClock></FaRegClock>  10.00am - 3.00pm  </p>

                            <p>|</p>

                            <p className="flex items-center gap-2"> <FaLocationArrow></FaLocationArrow> Gorigram, Santhia </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center bg-gray-200 rounded-lg">
                    <div className="w-5/12">
                        <figure><img className="rounded-md" src={event2} alt="Album" /></figure>
                    </div>
                    

                    <div className="py-5 w-7/12 px-10">
                        <a href="" className="hover:bg-black bg-primary text-white w-52 py-3 px-5 text-center rounded-md">25, June, 2023</a>
                        <h2 className="card-title mt-10 text-primary text-xl">WORLD BLOOD DONORS DAY</h2>
                        <p className="text-lg my-5">Every year, on 14 June, countries around the world celebrate World Blood Donor Day.  The event serves to thank voluntary.</p>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"> <FaRegClock></FaRegClock>  10.00am - 3.00pm  </p>

                            <p>|</p>

                            <p className="flex items-center gap-2"> <FaLocationArrow></FaLocationArrow> Gorigram, Santhia </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center bg-gray-200 rounded-lg">
                    <div className="w-5/12">
                        <figure><img className="rounded-md" src={event_3} alt="Album" /></figure>
                    </div>
                    

                    <div className="py-5 w-7/12 px-10">
                        <a href="" className="hover:bg-black bg-primary text-white w-52 py-3 px-5 text-center rounded-md">25, June, 2023</a>
                        <h2 className="card-title mt-10 text-primary text-xl">WORLD BLOOD DONORS DAY</h2>
                        <p className="text-lg my-5">Every year, on 14 June, countries around the world celebrate World Blood Donor Day.  The event serves to thank voluntary.</p>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"> <FaRegClock></FaRegClock>  10.00am - 3.00pm  </p>

                            <p>|</p>

                            <p className="flex items-center gap-2"> <FaLocationArrow></FaLocationArrow> Gorigram, Santhia </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center bg-gray-200 rounded-lg">
                    <div className="w-5/12">
                        <figure><img className="rounded-md" src={event_4} alt="Album" /></figure>
                    </div>
                    

                    <div className="py-5 w-7/12 px-10">
                        <a href="" className="hover:bg-black bg-primary text-white w-52 py-3 px-5 text-center rounded-md">25, June, 2023</a>
                        <h2 className="card-title mt-10 text-primary text-xl">WORLD BLOOD DONORS DAY</h2>
                        <p className="text-lg my-5">Every year, on 14 June, countries around the world celebrate World Blood Donor Day.  The event serves to thank voluntary.</p>
                        <div className="flex justify-between">
                            <p className="flex items-center gap-2"> <FaRegClock></FaRegClock>  10.00am - 3.00pm  </p>

                            <p>|</p>

                            <p className="flex items-center gap-2"> <FaLocationArrow></FaLocationArrow> Gorigram, Santhia </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OurCampaigns;