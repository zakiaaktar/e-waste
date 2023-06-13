import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {
    const { title, img, description } = service;


    return (
        

        
         <div className="card w-96 mx-auto bg-base-100 shadow-xl rounded-none">
            <figure><img src={img} alt="service-img" /></figure>
            <div className="card-body">
                <h2 className="card-title text-[#05BFDB] font-bold justify-center">{title}</h2>
                <p className='text-justify'>{description}</p>
                
                <div className="card-actions justify-center">
                    <Link to="/about">
                        <button className="btn bg-[#05BFDB] rounded-full px-6 py-3 border-none mt-2 font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;