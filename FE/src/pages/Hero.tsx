import Order from "./Order";

export default function Hero() {
    return (
        <div className='text-white border'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className="max-w-[700px] mt-[-96px] mx-auto border-4 border-[#00df9a] ">
                    <p className='text-3xl font-bold p-2'>
                        FOOD COURT
                    </p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        Order, eat, bring the happiness.Simply!
                    </h1>
                    <p className='md:text-2xl text-xl font-bold text-gray-500'>Choose your meal to increase happiness!</p>
                    
                </div>
            </div>
                <Order/>
        </div>
    )
}