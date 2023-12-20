import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Order from "./Order";

export default function Home() {
    return (
            <div>
            <Navbar/>
            <Hero/>
            <Order/>
            <Contact/>
            </div>
    )
}