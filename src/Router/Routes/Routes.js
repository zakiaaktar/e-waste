import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import ChoiceLine from "../../Pages/Home/ChoiceLine/ChoiceLine";
import Contact from "../../Pages/Home/Contact/Contact";
import Faq from "../../Pages/Home/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Planning from "../../Pages/Home/Planning/Planning";
import Services from "../../Pages/Home/Services/Services";
import Summary from "../../Pages/Home/Summary/Summary";
import Testimonial from "../../Pages/Home/Testimonial/Testimonial";
import Workers from "../../Pages/Home/Workers/Workers";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: '/summary',
                element: <Summary></Summary>,
            },
            {
                path: '/ChoiceLine',
                element: <ChoiceLine></ChoiceLine>,
            },
            {
                path: '/Planning',
                element: <Planning></Planning>,
            },
            {
                path: '/testimonial',
                element: <Testimonial></Testimonial>,
            },
            {
                path: '/workers',
                element: <Workers></Workers>,
            },
            {
                path: '/Faq',
                element: <Faq></Faq>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '*',
                element: <div>This route not found : 404</div>
              }
        ]
    }
])


export default router;