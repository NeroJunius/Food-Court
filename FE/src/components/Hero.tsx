import Order from "./Order";

export default function Hero() {
    return (
        <div>
            <div className='my-auto w-full h-screen mx-auto text-left flex flex-col justify-center'>
                <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 bg-[#BD0707]">
                    <div className="max-w-[59.875rem] max-h-[25rem] mx-auto bg-[#BD0707] rounded-lg space-x-1">

                    </div>
                    <h1 className='text-5xl font-bold p-2'>
                        WAYSBUCKS
                    </h1>
                    <br/> We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open.
                    <br/>  Waysbucks Drivers is also available
                    <br/> Lets get your foods..
                </div>  
                <div className="border p-7">

                </div>
                
            <Order />
        </div>
            {/* <div className="w-[28.1875rem] h-[28.85rem] relative z-10">
                    <img src="https://i.guim.co.uk/img/media/da289232c46fcf097ced4253b9ffbe4b8dd639aa/0_0_6704_4916/master/6704.jpg?width=700&quality=85&auto=format&fit=max&s=ea1252ff40ed2cbed1eaede8c010e11f"/>
                </div> */}
        </div>
    );     
}