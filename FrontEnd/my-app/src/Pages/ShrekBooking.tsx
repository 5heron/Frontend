import HeaderSuccess from "../components/HeaderSuccess"
import Footer from "../components/Footer"

export function ShrekBooking(){
    return(
        <div className="bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 z-0 flex flex-col justify-center min-h-svh text-rose-400 font-semibold">
            <HeaderSuccess/>
            <>
                Book Tickets for Star Shrek
            </>
            <Footer/>
        </div>
    )
}
