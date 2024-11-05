import HeaderSuccess from "../components/HeaderSuccess"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Card1 from "../components/Card1"
import Card2 from "../components/Card2"
import Card3 from "../components/Card3"
import Card4 from "../components/Card4"
import Card5 from "../components/Card5"

export default function()
{
    return(
        <div className="bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 z-0 flex flex-col justify-center min-h-svh">
            <HeaderSuccess/>
            <div className=" text-6xl font-semibold bg-gradient-to-r from-green-400 via-indigo-400 to-rose-600 p-8 text-transparent bg-clip-text self-center justify-items-center mt-16">
                    You have successfully logged in!
            </div>
            <div className="text-4xl bg-gradient-to-r from-indigo-400 to-rose-600 text-transparent bg-clip-text font-semibold self-center top-0 justify-items-center">
                    Select a show
            </div>
            <div className="flex flex-col gap-y-10 py-10">
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
                <Link to="/theatre5">
                    <Card5/>
                </Link>
            </div>
                <Footer/>
        </div>
    )
}