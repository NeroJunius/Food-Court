export default function DetailOrder() {
    return (
        <div className="max-w-[1240px] mx-auto flex p-4 gap-5">
            <div className="w-[27.25rem] h-[34.6875rem] flex-shrink-0">
                <img src="https://i.guim.co.uk/img/media/da289232c46fcf097ced4253b9ffbe4b8dd639aa/0_0_6704_4916/master/6704.jpg?width=700&quality=85&auto=format&fit=max&s=ea1252ff40ed2cbed1eaede8c010e11f" />
            </div>
            <div className="flex-col w-[90rem] h-[59.5625rem]">
                <div>
                    <h1>Ice Coffe Palm Sugar</h1>
                    <p>Rp. 20.000</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                    <div>
                        <img className="h-[5rem] w-[5rem] rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-[5rem] w-[5rem] rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-[5rem] w-[5rem] rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-[5rem] w-[5rem] rounded-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}