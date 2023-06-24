import './Counter.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaCalendarAlt, FaHeartbeat, FaStethoscope, FaUser, FaUsers } from 'react-icons/fa';
const Counter = () => {
    const [onCount, setOnCount] = useState(false);
    
    return (
        <div className='bgCounter relative h-96 my-20'>

            <div className='absolute top-0 left-0 w-full opacity-75 h-full bg-black'>

            </div>
            <div className='container mx-auto h-full'>
                <div className='grid md:grid-cols-2 h-full gap-10 lg:grid-cols-4 items-center'>

                    <div className="card text-center rounded-none bg-white py-7">
                        <div className='text-center flex justify-center'><FaHeartbeat className='my-2 w-14 h-14'></FaHeartbeat></div>
                        <div className="card-body py-2">
                            <h2 className="text-4xl text-primary">
                                <ScrollTrigger onEnter={() => setOnCount(true)} onExit={() => setOnCount(false)}>

                                    {onCount && <CountUp start={0} end={2578} duration={5} delay={0}></CountUp>}
                                    +

                                </ScrollTrigger>
                            </h2>
                            <h4 className='text-2xl text-[#111] my-2'>SUCCESS SMILE</h4>

                        </div>
                    </div>


                    <div className="card text-center rounded-none bg-white py-7">
                        <div className='text-center my-2 flex justify-center'><FaStethoscope className='w-14 h-14'></FaStethoscope></div>
                        <div className="card-body py-2">
                            <h2 className="text-4xl text-primary">
                                <ScrollTrigger onEnter={() => setOnCount(true)} onExit={() => setOnCount(false)}>

                                    {onCount && <CountUp start={0} end={3235} duration={5} delay={0}></CountUp>}
                                    +

                                </ScrollTrigger>
                            </h2>
                            <h4 className='text-2xl my-2 text-[#111]'>HAPPY DONORS</h4>

                        </div>
                    </div>

                    <div className="card text-center rounded-none bg-white py-7">
                        <div className='text-center my-2 flex justify-center'><FaUsers className='w-14 h-14'></FaUsers></div>
                        <div className="card-body py-2">
                            <h2 className="text-4xl text-primary">
                                <ScrollTrigger onEnter={() => setOnCount(true)} onExit={() => setOnCount(false)}>

                                    {onCount && <CountUp start={0} end={3568} duration={5} delay={0}></CountUp>}
                                    +

                                </ScrollTrigger>
                            </h2>
                            <h4 className='text-2xl my-2 text-[#111]'>HAPPY RECIPIENT
                            </h4>

                        </div>
                    </div>


                    <div className="card text-center rounded-none bg-white py-7">
                       <div className='text-center my-2 flex justify-center'><FaCalendarAlt className='w-14 h-14'></FaCalendarAlt></div>
                        <div className="card-body py-2">
                            <h2 className="text-4xl text-primary">
                                <ScrollTrigger onEnter={() => setOnCount(true)} onExit={() => setOnCount(false)}>

                                    {onCount && <CountUp start={0} end={1364} duration={5} delay={0}></CountUp>}
                                    +

                                </ScrollTrigger>
                            </h2>
                            <h4 className='text-2xl my-2 text-[#111]'>TOTAL AWARDS</h4>
                            
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Counter;