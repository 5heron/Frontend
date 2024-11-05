import Header from "../components/Header";
import Footer from "../components/Footer";

export function About(){
    return(
        <div className="p-10 items-center bg-gradient-to-r from-red-950 via-indigo-950 to-neutral-800 z-0 flex flex-col justify-center min-h-svh">
        <Header/>
            <div className=" text-rose-200 font-semibold text-4xl">
                Frontend: Siddharth Nair S __ Vishnu Krishnakumar
            </div>
            <div className="p-10 text-indigo-200 font-semibold text-4xl">
                Backend: Sheron Roy KY __ Sanjay Pathiyil
            </div>
        <Footer/>
        </div>
    )
}