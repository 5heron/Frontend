import HeaderSuccess from "../components/HeaderSuccess";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";

export function BookingPageSuccess(){
    return(
        <div className="bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 z-0 flex flex-col justify-center min-h-svh">
            <HeaderSuccess/>
                <div className="flex flex-col gap-y-10 py-24">
                    <Link to="/theatre1">
                        <Card1/>
                    </Link>
                    <Link to="/theatre2">
                        <Card2/>
                    </Link>
                    <Link to="/theatre3">
                        <Card3/>
                    </Link>
                    <Link to="/theatre4">
                        <Card4/>
                    </Link>
                </div>
            <Footer/>
        </div>
    )
}
