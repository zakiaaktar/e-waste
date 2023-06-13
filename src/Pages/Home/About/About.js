import React from 'react';
import about from '../../../assets/images/about.jpg'

const About = () => {
    return (

        <div className="my-24">
        <div className="hero">
          <div className="hero-content justify-between flex-col sm:w-full lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold text-[#05BFDB] w-1/2">
                O V E R V I E W 
              </h1>
              <h2 className="text-3xl font-serif font-bold mt-10">
                A Little Information About E-WASTE
              </h2>
              <p className="text-gray-600 mt-6">
              We are committed to providing responsible and sustainable <br /> e-waste and Li batteries recycling services.
              </p>
              <p className="text-gray-600">
              We understand the importance of protecting the environment <br /> and conserving natural resources
              </p>
              <div className="flex gap-10 mt-6 justify-center lg:justify-start ">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    30<span className="text-[#05BFDB]">+</span>
                  </h2>
                  <small className="text-gray-600">Worldwide Branch</small>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-center">
                    1000<span className="text-[#05BFDB]">+</span>
                  </h2>
                  <small className="text-gray-600">Trusted Clients</small>
                </div>
  
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    500<span className="text-[#05BFDB] font-extrabold">+</span>
                  </h2>
                  <small className="text-gray-600">Team Members</small>
                </div>
              </div>
            </div>
            <div className="card relative sm:w-1/2 h-full">
              <div className="card-body">
                <img
                  src={about}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>



        // <div className='mt-12'>

           

        //     <h1 className='uppercase text-3xl font-bold text-center mt-10 mb-8'>Our Services</h1>
        //     <h1 className='uppercase text-3xl font-bold text-center mt-10 mb-8'>INTEGRATED E-WASTE RECYCLER</h1>



        //     <div className="hero  bg-base-200">
        //         <div className="hero-content flex-col justify-around md:flex-row-reverse">
        //             <img src={about} className=" rounded-lg hidden md:block shadow-2xl w-2/4" alt='' />
        //             <div>
        //                 <h1 className='text-center  md:text-left text-3xl font-bold text-blue-500'>INTEGRATED E-WASTE RECYCLER</h1>
        //                 <p className="py-6 text-center  md:text-left">Lithium-ion batteries compose of metals including cobalt, nickel, lithium and manganese. At the end of life, the battery goes through the recycling process. This processed material is known as “black mass”, consisting of amounts of cobalt, nickel, lithium, and manganese. These precious metals can be extracted from the black mass and upcycled for new battery production!</p>
        //                 <button className="mx-auto md:ml-0 md:text-center block btn btn-warning uppercase">Read More</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default About;