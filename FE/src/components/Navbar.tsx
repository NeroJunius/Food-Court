

export default function Navbar() {
   
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
            <h1 className='w-full text-3xl font-bold text-[#BD0707]'>Food Corner</h1>
            <ul className="hidden md:flex">

                <li className="p-4">
                    <button
                        type="submit"
                        className="text-[#BD0707] border-[2px] border-[#BD0707] hover:bg-[#BD0707] hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Login
                    </button>
                </li>

                <li className="p-4">
                    <button
                        type="submit"
                        className="text-white border-[2px] border-[#BD0707] bg-[#BD0707] hover:bg-white hover:text-[#BD0707] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                    >
                        Register
                    </button>
                </li>
            </ul>
            
        </div>
    )
}

