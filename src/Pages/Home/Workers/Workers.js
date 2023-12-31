import React from 'react';
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    } from "react-icons/fa";



const Workers = () => {
    const employees = [
        {
            id: 1,
            name: "John Doe",
            img: "https://i.ibb.co/RHzy3Nb/Untitled-design.jpg",
            title: "Service Engineer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: ""
        },
        {
            id: 2,
            name: "John Doe",
            img: "https://i.ibb.co/RHzy3Nb/Untitled-design.jpg",
            title: "Service Engineer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: ""
        },
        {
            id: 3,
            name: "John Doe",
            img: "https://i.ibb.co/RHzy3Nb/Untitled-design.jpg",
            title: "Service Engineer",
            facebook: "url",
            linkedin: "url",
            github: "url",
            email: ""
        },
        
    ];

    

    return (
        <section className="mb-16 bg-gray-100 text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
           
            <h1 className="text-xl font-bold leading-none text-center text-[#05BFDB] sm:text-4xl font-serif">
                OUR EXPERT ENGINEERS
            </h1>
            <div className="flex flex-row justify-center mt-8 group">
                {employees.map(employee => (
                    <div
                        key={employee.id}
                        className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-96  bg-[#05BFDB] text-gray-100 shadow-lg shadow-gray-700 group-hover:scale-90 hover:!scale-110 duration-500">
                        <img
                            alt="employeeImage"
                            className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                            src={employee.img}
                        />
                        <div className="flex-1 my-4">
                            <p className="text-xl font-semibold leading-snug">
                                {employee.name}
                            </p>
                            <p>{employee.title}</p>
                        </div>
                        <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                            <a
                                rel="noopener noreferrer"
                                href={employee?.facebook}
                                title="Facebook"
                                className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                            >
                                <FaLinkedinIn className="text-xl" />
                                
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href={employee?.github}
                                title="Email"
                                className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                            >
                                 <FaGithub className="text-xl" />
                               
                            </a>
                            <a
                                rel="noopener noreferrer"
                                href={employee?.linkedin}
                                title="LinkedIn"
                                className="text-gray-50 hover:bg-gray-100 hover:text-primary rounded-full p-2 hover:shadow-md hover:shadow-gray-700 hover:scale-110 duration-500"
                            >
                                <FaFacebookF className="text-xl" />
                            </a>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Workers;