
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slider1 from "../../assets/image/slider1.png";
import slider2 from "../../assets/image/Slider2.png"
const HeroBanner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className="relative">
                <img src={slider1} alt="" />
                
                    <div className="absolute top-1/2 left-52 -translate-y-1/2">
                     
                        <h4 className="text-4xl mb-6 text-white">Donate blood,save life !</h4>
                        <h1 className="text-5xl leading-tight text-white"> YOUR BLOOD <br />  CAN BRING SMILE <br /> IN OTHER PERSON FACE <br /> </h1>
                        <button className="btn mt-6 px-10 border-none hover:bg-black text-white bg-primary ">Donate now</button>
                    </div>
                
            </div>
            <div className="relative">
                <img src={slider2} alt="" />
                
                    <div className="absolute top-1/2 left-52 -translate-y-1/2">
                     
                        <h4 className="text-4xl mb-6 text-white">Donate blood,save life !</h4>
                        <h1 className="text-5xl leading-tight text-white">   DONATE BLOOD <br />  AND INSPIRES OTHERS. </h1>
                        <button className="btn mt-6 px-10 border-none hover:bg-black text-white bg-primary ">Donate now</button>
                    </div>
                
            </div>


        </Slider>
    );
};

export default HeroBanner;