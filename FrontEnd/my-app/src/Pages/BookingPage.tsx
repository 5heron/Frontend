import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Cards from "../components/Card1";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";

export function BookingPage(){
    return(
        <div className="bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
            <Header/>
                <div className="flex flex-col gap-y-10 py-24">
                    <Link to="/login">
                        <Card1/>
                    </Link>
                    <Link to="/login">
                        <Card2/>
                    </Link>
                    <Link to="/login">
                        <Card3/>
                    </Link>
                    <Link to="/login">
                        <Card4/>
                    </Link>
                    <Link to="/login">
                        <Card5/>
                    </Link>
                </div>
            <Footer/>
        </div>
    )
}
