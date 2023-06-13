import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChoiceLine from '../ChoiceLine/ChoiceLine';
import Contact from '../Contact/Contact';
import Faq from '../FAQ/Faq';
import Planning from '../Planning/Planning';
import Services from '../Services/Services';
import Summary from '../Summary/Summary';
import Testimonial from '../Testimonial/Testimonial';
import Workers from '../Workers/Workers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Summary></Summary>
            <Services></Services>
            <Planning></Planning>
            <ChoiceLine></ChoiceLine>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Workers></Workers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;