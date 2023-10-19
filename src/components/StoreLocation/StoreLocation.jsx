

const StoreLocation = () => {
    return (
        <section  className="bg-white dark:bg-gray-900">
    <div  className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
        <div>
            <p  className="font-medium text-blue-500 dark:text-blue-400">Our locations</p>

            <h1  className="mt-2 text-2xl font-semibold text-[#FFBD26] md:text-5xl dark:text-white">Visit our stores</h1>

            <p  className="mt-3 text-gray-500 dark:text-gray-400">Find us at these locations.</p>
        </div>

        <div  className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
            <div>
                <h2  className="font-medium text-[#FFBD26] text-2xl dark:text-white">Basundhara</h2>
                <p  className="mt-2 text-gray-500 dark:text-gray-400">5th Floor, Shop-404, Basundhara City</p>
            </div>

            <div>
                <h2  className="font-medium text-[#FFBD26] text-2xl dark:text-white">Jamuna Future Park</h2>
                <p  className="mt-2 text-gray-500 dark:text-gray-400">5th Floor, Shop-404, Jamuna</p>
            </div>

            <div>
                <h2  className="font-medium text-[#FFBD26] text-2xl dark:text-white">Elephant Road</h2>
                <p  className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street  Melbourne VIC 3000 AU</p>
            </div>

            <div>
                <h2  className="font-medium text-[#FFBD26] text-2xl dark:text-white">Orchard Point</h2>
                <p  className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street  Melbourne VIC 3000 AU</p>
            </div>

            <div>
                <h2  className="font-medium text-[#FFBD26] text-2xl dark:text-white">Uttara</h2>
                <p  className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street  Melbourne VIC 3000 AU</p>
            </div>

            <div>
                <h2  className="font-medium text-[#FFBD26] text-2xl  dark:text-gray-200">Mirpur 10</h2>
                <p  className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street  Melbourne VIC 3000 AU</p>
            </div>
        </div>
    </div>
</section>
    );
};

export default StoreLocation;