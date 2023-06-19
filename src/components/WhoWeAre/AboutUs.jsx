import aboutImage from "../../assets/image/about.png"
const AboutUs = () => {
    return (
        <div className="container mx-auto my-32">
            <div className="flex items-center">
                <div className="bg-gray-100 py-10 px-5 hover:shadow-lg hover:transition-all -mr-20 z-50 rounded-md">
                    <div className="">
                        <h3 className="text-6xl text-black">Who We Are?</h3>
                        <p className="text-black my-5">Blood Buddies is for public donation center with blood donation members in the changing health care system.</p>
                        <ul className="space-y-2 space-x-5 list-disc marker:text-primary">
                            <li className="ml-5">Specialist blood donors and clinical supervision.</li>
                            <li>Increasing communication with our members.</li>
                            <li>High quality assessment, diagnosis and treatment.</li>
                            <li>Examine critically to ensure alignment.</li>
                            <li>The extra care of a multi-disciplinary team.</li>

                        </ul>
                    </div>
                </div>
                <div className="z-40">
                    <img className="z-40 w-full h-full rounded-md" src={aboutImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;