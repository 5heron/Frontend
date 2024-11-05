import HeaderSuccess from "../components/HeaderSuccess";
import Footer from "../components/Footer";

export function AboutSuccess(){
    return(
        <div className="items-center bg-gradient-to-r from-indigo-950 via-violet-950 to-purple-950 z-0 flex flex-col justify-center min-h-svh">
        <HeaderSuccess/>
            <div className=" text-rose-200 font-semibold text-4xl">
                Frontend: Siddharth Nair S __ Vishnu Krishnakumar
            </div>
            <div className=" text-indigo-200 font-semibold text-4xl">
                Backend: Sheron Roy KY __ Sanjay Pathiyil
            </div>
        <Footer/>
        </div>
    )
}