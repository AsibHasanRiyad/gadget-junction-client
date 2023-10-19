
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" flex text-[#676666] pt-2.5 text-sm font-medium">
      <Marquee pauseOnHover={true} className=" cursor-pointer">
      <p className=" mx-2">Apple files lawsuit against NSO Group, saying U.S. citizens were targets</p>
      <p className=" mx-2">Xiaomi revenue misses estimates as competition intensifies</p>
      <p className=" mx-2">Dell forecasts upbeat revenue on strong PC demand</p>
      <p className=" mx-2">Texas wins contest to host Samsung new $17 billion chip plant</p>
      <p className=" mx-2">Virtual real estate plot sells for record $2.4 million</p>
      </Marquee>
    </div>
    );
};

export default Marque;