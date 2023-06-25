import React from 'react';
import about from '../../../assets/images/about.jpg'
import useTitle from '../../../hooks/useTitle';

const About = () => {
  useTitle('about')


  return (
    <div className="my-24">
      <div className="hero">
        <div className="hero-content justify-between flex-col sm:w-full lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#05BFDB] w-1/2 font-serif">
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
            <div className="card-body" data-aos="fade-left"
              data-aos-duration="1000">
              <img
                src={about}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;