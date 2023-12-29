import Order from "../components/Order";

export default function Hero() {
    return (
        <div className='text-white'>
            <div className='my-auto w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <div className="max-w-[800px] mx-auto bg-[#BD0707]">
                    <p className='text-3xl font-bold p-2'>
                        FOOD COURT
                    </p>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        Order, eat, bring the happiness.Simply!
                    </h1>
                </div>
                <Order />
            </div>
        </div>
    )
}