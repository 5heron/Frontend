import Header from "../components/Header"
import Footer from "../components/Footer"

export default function()
{
    return(
        <div className="bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
            <Header/>
                You have successfully logged in
            <Footer/>
        </div>
    )
}