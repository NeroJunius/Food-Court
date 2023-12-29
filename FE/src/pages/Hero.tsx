import Order from "../components/Order";

export default function Hero() {
    return (
        <div className='text-white'>
            <div className='my-auto w-full h-screen mx-auto text-left flex flex-col'>
                
                <div className="max-w-[59.875rem] max-h-[25rem] mx-auto bg-[#BD0707] rounded-lg">
                    <p className='text-3xl font-bold p-2'>
                        WAYSBUCKS
                    </p>
                    <h1 className='md:text-2xl sm:text-6xl text-4xl font-bold p-2'>
                        Things are changing, but we’re still here for you
                    </h1>
                    <h1 className='md:text-2xl sm:text-6xl text-4xl font-bold p-2'>
                    We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. 
                    <br/>Waysbucks Drivers is also available  
                    Let’s Order...
                    </h1>
                </div>
                <Order />
            </div>
        </div>
    )
}