import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Faq = () => {
    useTitle('Faq')



    return (
        <section className="w-4/5 mx-auto my-20 py-5">
            <h1 className="text-2xl md:text-4xl text-[#05BFDB] font-bold text-center mb-10">
                FREQUENTLY ASKED QUESTIONS
            </h1>

            <div className="collapse collapse-arrow border bg-base-100 mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                What is e-waste?
                </div>
                <div className="collapse-content">
                    <p>
                    E-waste is a term used to describe electronic products that have reached the end of their useful life or are no longer wanted or needed. Examples of e-waste include computers, televisions, cell phones, and other electronic devices.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                Why is e-waste recycling important?
                </div>
                <div className="collapse-content">
                    <p>E-waste contains valuable materials that can be reused and recycled, such as metals, plastics, and glass. Recycling e-waste helps to conserve natural resources and reduce the environmental impact of electronic waste.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                Why is Li battery recycling important?
                </div>
                <div className="collapse-content">
                    <p> Lithium-ion batteries contain valuable metals and materials that can be reused in new battery production. Recycling Li batteries helps to reduce waste and conserve natural resources, while also reducing the environmental impact of discarded batteries.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow border mb-3 border-[#05BFDB] text-start">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl">
                What are the benefits of using e-waste and Li battery recycling services?
                </div>
                <div className="collapse-content">
                    <p>Using e-waste and Li battery recycling services helps to protect the environment, conserve natural resources, and reduce waste. These services ensure that e-waste and Li batteries are recycled or disposed of safely and responsibly, minimizing their impact on the environment.</p>
                </div>
            </div>
        </section>
    );
};

export default Faq;