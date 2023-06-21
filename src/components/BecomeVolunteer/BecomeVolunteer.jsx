import './bgBecomeVolunteer.css'
const BecomeVolunteer = () => {
    return (
        <div className="bgBecomeVolunteer my-32 w-full h-72 relative">
            <div className='absolute bg-primary h-full w-full opacity-90'>
            <div className='container mx-auto'>
                <div className='text-center py-16 text-white'>
                <h2 className='mb-3 text-3xl'>WE ARE HELPING PEOPLE FROM 40 YEARS</h2>
                <p className='text-xl mb-3'>
                You can give blood at any of our blood donation venues all over the world. We have total sixty <br /> thousands donor centers and visit thousands of other venues on various occasions.
                </p>
                <button className='btn bg-white'>become volunteer</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BecomeVolunteer;