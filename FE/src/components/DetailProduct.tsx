export default function DetailOrder() {
    return (
        <div className="max-w-[1240px] mx-auto flex p-4 gap-5">
            <div className="w-[27.25rem] h-[34.6875rem] flex-shrink-0">
                <img src="https://static.toiimg.com/photo/98418214.cms" />
            </div>
            <div className="flex-col w-[90rem] h-[59.5625rem] py-5">
                <div className="flex-col px-3 pb-[4.5rem] gap-5 col-span-2">
                    <h1 className="text-6xl font-bold text-[#BD0707]">Ice Juices</h1>
                    <p className="text-2xl pt-3 text-[#974A4A] ">Rp. 20.000</p>
                </div>
                <div className="flex flex-col mt-[5.5rem]">
                    <h1 className="text-3xl font-bold pl-2">Flavor</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3">
                        <div className="flex flex-col gap-4">
                            <img className="h-[5rem] w-[5rem] rounded-full content-center mx-auto" src="https://www.astronauts.id/blog/wp-content/uploads/2023/01/Ini-Manfaat-Buah-Strawberry-yang-Harus-Kamu-Ketahui-1024x683.jpg" alt="" />
                            <p className="text-[#BD0707] font-bold text-center">Strawberry</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img className="h-[5rem] w-[5rem] rounded-full mx-auto" src="https://akcdn.detik.net.id/visual/2015/03/11/2b4504f2-c600-4001-a19b-180470b86ef1_169.jpg?w=650&q=90" alt="" />
                            <p className="text-[#BD0707] font-bold text-center">Blueberry</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img className="h-[5rem] w-[5rem] rounded- mx-auto" src="https://www.organics.ph/cdn/shop/products/apple-washington-size-113-per-piece-fruits-vegetables-fresh-produce-509590_600x.jpg?v=1601486996" alt="" />
                            <p className="text-[#BD0707] font-bold text-center">Apple</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img className="h-[5rem] w-[5rem] rounded-full mx-auto" src="https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg" alt="" />
                            <p className="text-[#BD0707] font-bold text-center">Pineapple</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <img className="h-[5rem] w-[5rem] rounded-full mx-auto" src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/10/manfaat-buah-kiwi.webp" alt="" />
                            <p className="text-[#BD0707] font-bold text-center">Kiwi</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-[10rem] mt-[3.5rem]">
                    <div className="flex justify-between px-3 pb-5">
                        <h1 className="text-3xl font-bold">Total</h1>
                        <p className="text-3xl font-bold">Rp. 20.000</p>
                    </div>
                    <div className="mt-5 bg-[#BD0707] text-white text-2xl font-bold text-center rounded px-2 py-2">Add Cart</div>
                </div>
            </div>

        </div>
    )
}