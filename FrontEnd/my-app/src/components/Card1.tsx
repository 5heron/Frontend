export default function Card1(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex bg-indigo-500 opacity-40 w-11/12 rounded-lg hover:scale-105 ease-in-out duration-500">
                <img className="w-[250px] h-[250px]" src="../public/images/GetShreked.jpeg" alt="GotShreked"></img>
                <div className="text-5xl font-bold text-pretty text-blue-100 px-5 drop-shadow-[0_1.0px_1.0px_rgba(0,0,0,0.8)]">
                    Star Shrek
                </div>
            </div>
        </div>
    )
}