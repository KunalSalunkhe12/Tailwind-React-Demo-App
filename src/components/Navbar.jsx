import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav)
    }

  return (
    <nav className="flex text-white h-24 p-4 items-center max-w-6xl mx-auto">
      <h1 className="w-full text-xl md:text-3xl text-custom_green font-bold">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {
            nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />
        }
      </div>
      <div className= {nav ? "fixed top-0 left-0 bg-custom_black h-full w-1/2 p-4 ease-in-out duration-500" : "fixed left-[-100%] top-0 ease-in-out duration-500"}>
        <h1 className="text-3xl text-custom_green font-bold py-4">REACT.</h1>
        <ul className="flex flex-col">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resource</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
