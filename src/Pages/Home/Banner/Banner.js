import React from 'react';
import { Link } from 'react-router-dom';
import battery from '../../../assets/images/battery.jpg'

const Banner = () => {
    return (


        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url(${battery})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h1 className="mb-5 text-5xl text-stone-300 font-bold uppercase">A fully equipped</h1>
                        <h1 className="mb-5 text-7xl text-[#05BFDB] font-bold uppercase font-serif">e-waste recycler</h1>
                        <p className='uppercase mb-5'>A fully equipped e-waste recycler. LITHIUM-ION BATTERY RECYCLING</p>
                        <Link to="/about">
                            <button className="btn bg-[#05BFDB] rounded-full px-6 py-3 border-none mt-2 font-bold">More Info...</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>




        //     <div className="hero">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src={battery} className="lg:w-1/2 rounded-lg shadow-2xl" alt=""/>
        //         <div>
        //             <h1 className="text-2xl font-bold">LITHIUM-ION BATTERY RECYCLING</h1>
        //             <p className="py-6">A fully equipped e-waste recycler,</p>
        //             <button>More  info</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;