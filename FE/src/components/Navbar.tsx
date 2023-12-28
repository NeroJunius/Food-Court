import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {
    const [nav, setNav] = useState(true);
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                 <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Food Corner</h1>
                <ul className="hidden md:flex">
                    <li className="p-4">Home</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Login</li>
                    <li className="p-4 ">Register</li>
                </ul>
            <div onClick={handleNav} onKeyDown={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-7x1 font-bold text-white m-4">Home</h1>
                <ul className="pt-24 uppercase">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4 border-b border-gray-600">Login</li>
                    <li className="p-4 border-b border-gray-600">Register</li>
                    <li className="p-4">Login</li>
                </ul>
            </div>
        </div>
    )
}

