import { RouterProvider } from 'react-router';
import './App.css';
import router from './Router/Routes/Routes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="">
      <RouterProvider router={router} fallbackElement={<div className='w-3/12 mx-auto'><progress className="progress w-56 mt-36 text-center"></progress></div>}></RouterProvider>
    </div>
  );
}

export default App;
