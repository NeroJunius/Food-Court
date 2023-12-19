import Navbar from "./Navbar";

export default function Home() {
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-5x1 font-bold text-white">Home</h1>
            <div>
            <Navbar/>
            </div>
        </div>
    )
}