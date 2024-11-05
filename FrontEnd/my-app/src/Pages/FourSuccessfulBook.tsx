import HeaderSuccess from "../components/HeaderSuccess";
import Footer from "../components/Footer";

export function FourSuccessfulBook(){
    return(
        <>
            <HeaderSuccess/>
                <div className="text-5xl text-rose-600 justify-center items-center bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 z-0 flex flex-col min-h-svh">
                    You have succesfully booked seats for
                    <div className="text-green-300">
                        Star Shrek
                    </div>
                </div>
            <Footer/>
        </>
    )
}