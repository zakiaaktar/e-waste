import React from 'react';





const ChoiceLine = () => {
    return (
        <div className="mt-24">
            <div className="container  mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <h2 className="text-center text-[#05BFDB] text-4xl font-bold font-serif">
                        WHY CHOOSE US
                    </h2>
                    <h2 className="text-center text-2xl font-bold  mb-20 mt-12">
                        Why You Choose Our e-waste Service?
                    </h2>
                    <div
                        style={{ left: "50%" }}
                        className="border-2-2 absolute border-[#05BFDB] h-full border"
                    ></div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#05BFDB] shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                        </div>
                        <div className="order-1 border-l-4 border-[#05BFDB]  shadow-xl w-5/12 px-6 py-4" data-aos="fade-left"
                            data-aos-duration="1000">
                            <h3 className="mb-3 font-bold text-[#05BFDB] text-xl">
                                Have Many Team Worker

                            </h3>
                            <p className="text-sm leading-snug tracking-wide text-[gray] text-opacity-100">
                                Effective teamwork is essential for companies working with e-waste and Li batteries. These industries require collaboration between various teams with different areas of expertise to ensure safe and responsible handling of electronic waste and Li batteries.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#05BFDB] shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                        </div>
                        <div className="order-1 bg-[#05BFDB] shadow-xl w-5/12 px-6 py-4" data-aos="fade-right"
                            data-aos-duration="1000">
                            <h3 className="mb-3 font-bold text-white text-xl">
                                20 Years Experience
                            </h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Over the last 20 years, this companies have made significant achievements in the field of e-waste and Li batteries. Over the last 20 years, this companies have made significant achievements in the field of e-waste and Li batteries.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#05BFDB] shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                        </div>
                        <div className="order-1 border-l-4 border-[#05BFDB] shadow-xl w-5/12 px-6 py-4" data-aos="fade-left"
                            data-aos-duration="1000">
                            <h3 className="mb-3 font-bold text-[#05BFDB] text-xl">
                                Have Many Team Worker
                            </h3>
                            <p className="text-sm leading-snug tracking-wide text-[gray] text-opacity-100">
                                Effective teamwork is essential for companies working with e-waste and Li batteries. These industries require collaboration between various teams with different areas of expertise to ensure safe and responsible handling of electronic waste and Li batteries.
                            </p>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-[#05BFDB] shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                        </div>
                        <div
                            style={{
                                boxShadow:
                                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            }}
                            className="order-1 bg-[#05BFDB] w-5/12 px-6 py-4" data-aos="fade-right"
                            data-aos-duration="1000">
                            <h3 className="mb-3 font-bold text-white text-xl">Professional workers</h3>
                            <p className="text-sm font-medium  leading-snug tracking-wide text-white text-opacity-100">
                                Companies working with e-waste and Li batteries typically require professional workers with specialized skills and knowledge in areas such as electronics, engineering, recycling, and hazardous waste management.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ChoiceLine;