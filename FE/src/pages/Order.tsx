export default function Order() {
    return (
        <div className='bg-[#00df9a] text-black'>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight">Customers also purchased</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm">
                                    <a href="#">
                                        <p aria-hidden="true" className="absolute inset-0"></p>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm">Black</p>
                            </div>
                            <p className="text-sm font-medium">$35</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm">
                                    <a href="#">
                                        <p aria-hidden="true" className="absolute inset-0"></p>
                                        Basic Tee
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm">Black</p>
                            </div>
                            <p className="text-sm font-medium">$35</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}