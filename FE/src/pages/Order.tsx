import Salmon from '../assets/salmon steak.jpg'
import Yogurt from '../assets/yogurt.jpg'
import Pancakes from '../assets/pancakes.jpg'

export default function Order() {
    return (
        <div className='bg-[#00df9a] text-black'>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight">Choose our menu</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Sweet-and-Sour-Tofu-7b9db79.jpg?quality=90&resize=556,505"  className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm">
                                    <a href="#">
                                        <p aria-hidden="true" className="absolute inset-0 font-bold"/>
                                        Sweet and Sour Tofu
                                    </a>
                                </h3>
                               
                            </div>
                            <p className="text-sm font-medium">$35</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src={Salmon} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm">
                                    <a href="#">
                                        <p aria-hidden="true" className="absolute inset-0"></p>
                                        Salmon Steak
                                    </a>
                                </h3>
                            </div>
                            <p className="text-sm font-medium">$35</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src={Yogurt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm">
                                    <a href="#">
                                        <p aria-hidden="true" className="absolute inset-0"></p>
                                        Strawberry Yogurt
                                    </a>
                                </h3>
                            </div>
                            <p className="text-sm font-medium">$20</p>
                        </div>
                    </div>

                    <div className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img src={Pancakes} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm">
                                    <a href="#">
                                        <p aria-hidden="true" className="absolute inset-0"></p>
                                        Pancakes Honey Stack
                                    </a>
                                </h3>
                            </div>
                            <p className="text-sm font-medium">$35</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}