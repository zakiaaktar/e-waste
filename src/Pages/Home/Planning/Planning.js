import React from 'react';

const Planning = () => {
    return (
        <section className="mt-20">
            <div className="container flex flex-col items-center justify-center mx-auto sm:p-10 my-12">
                <h2 className="text-4xl font-serif font-bold text-[#05BFDB] mb-12">SERVICE PLANNING AREA</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 group">
                    <div className="bg-gradient-to-r from-sky-500 hover:from-sky-500 hover:to-blue-500 to-sky-300 p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-white rounded-lg shadow-md p-6  border h-full">
                            <h3 className="text-lg text-[#05BFDB] font-bold mb-2 text-center">
                            Recharge Recycling
                            </h3>
                            <p className="text-gray-600 text-justify">
                            The recycling business is centred on the reprocessing of spent lithium ion batteries into fresh cells. This procedure often entails deconstructing lithium ion batteries and separating all of their various components in order to reuse them in a fresh cell.
                            </p>
                        </div>
                    </div>
                   
                    <div className="bg-gradient-to-r from-sky-500 hover:from-sky-500 hover:to-blue-500 to-sky-300 p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg text-[#05BFDB] font-bold mb-2 text-center">
                            Integrated E-WASTE recycler
                            </h3>
                            <p className="text-gray-600 text-justify">
                            The producer organisations are joining forces to collect, sort and recycle waste electrical and electronic appliances and batteries. The producer organisations are joining forces to collect, sort and recycle waste electrical and electronic appliances and batteries. </p>
                        </div>
                    </div>
                  
                    <div className="bg-gradient-to-r from-sky-500 hover:from-sky-500 hover:to-blue-500 to-sky-300 p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg text-[#05BFDB] font-bold mb- text-center"> ReNew Battery Solutions</h3>
                            <p className="text-gray-600 text-justify">
                            Whether it's an automotive, marine or deep cycle battery our trained Team are here to help and charge it ready for your next adventure. Whether it's an automotive, marine or deep cycle battery our trained Team are here to help and charge it ready for your next adventure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
   
};

export default Planning;