/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

const Marquee2 = () => {
  return (
    <div className="">
        <h1 className=" text-2xl font-bold text-[#FFBD26] md:text-4xl text-center">What People Says About Us</h1>
      <div className=" flex text-[#000000] pt-2.5 text-sm font-medium">
        <Marquee pauseOnHover={false} className=" cursor-pointer gap-10">
          <div className="w-full mx-5 max-w-md px-8 py-4 mt-16 mb-10 bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Quality products
            </h2>

            <p className="mt-2 text-sm text-black dark:text-gray-200">
            "I recently purchased the latest model of the [Phone Brand] from this shop, and I couldn't be happier. The staff was incredibly knowledgeable and helped me find the perfect phone to suit my needs. The selection of phones was impressive, and they had a wide range of accessories to choose from as well. Overall, a fantastic experience!"
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                Shakib
              </a>
            </div>
          </div>
          <div className="w-full mx-10 max-w-md px-8 py-4 mt-16 mb-10 bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://i.ibb.co/1R9bf33/user.png"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Good After Sell Service
            </h2>

            <p className="mt-2 text-sm text-black dark:text-gray-200">
            "I had an exceptional experience shopping for a phone at this store. The staff was friendly and provided detailed information about various phone options. I ended up with the perfect phone for my needs and budget. The post-purchase service has been excellent, too. They stand by their products. I'll definitely return for future phone upgrades!"
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                Eshak Ahmed
              </a>
            </div>
          </div>
          <div className="w-full mx-5 max-w-md px-8 py-4 mt-16 mb-10 bg-slate-50 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <img
                className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://i.ibb.co/mtxxTpV/9439727.jpg"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
              Well Behave
            </h2>

            <p className="mt-2 text-sm text-black dark:text-gray-200">
            "I recently purchased the latest model of the [Phone Brand] from this shop, and I couldn't be happier. The staff was incredibly knowledgeable and helped me find the perfect phone to suit my needs. The selection of phones was impressive, and they had a wide range of accessories to choose from as well. Overall, a fantastic experience!"
            </p>

            <div className="flex justify-end mt-4">
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                role="link"
              >
                Mritul
              </a>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marquee2;
