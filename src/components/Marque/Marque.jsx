
import Marquee from 'react-fast-marquee';

const Marque = () => {
    return (
        <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=" flex text-[#676666] dark:text-white pt-2.5 text-sm font-medium">
      <Marquee pauseOnHover={true} className=" cursor-pointer">
      <p className=" mx-2">Good news for the people of Chittagong, Our new outlet will be open on friday, December 21</p>
      <p className=" mx-2">10% discount is available in all gadget till November 21</p>
      <p className=" mx-2">We are providing service warranty for at least 1 year </p>
      <p className=" mx-2">Delivery within 48 Hours All over Bangladesh</p>
      <p className=" mx-2">Basundhara outlet is off today</p>
      </Marquee>
    </div>
    );
};

export default Marque;