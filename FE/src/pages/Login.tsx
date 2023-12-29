import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-left text-4xl font-bold leading-9 tracking-tight text-[#BD0707]">Login</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <div className="mt-2">
                            <input
                                type="email"
                                id="email"
                                className="bg-gray-50 border-[2px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 border-[#BD0707] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2">
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-50 border-[2px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-dark block w-full p-2.5 border-[#BD0707] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#BD0707] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Don't have an account?
                    <Link to={"/register"} className="pl-2 font-bold leading-6 hover:text-indigo-500"> Click here</Link>
                </p>
            </div>
        </div>
    )
}