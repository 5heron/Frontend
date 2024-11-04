export default function Card1(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex bg-indigo-500 opacity-40 w-11/12 rounded-lg hover:scale-105 ease-in-out duration-500">
                <img className="w-[250px] h-[250px]" src="../public/images/GetShreked.jpeg" alt="GotShreked"></img>
                <div className="text-5xl font-bold text-pretty text-pink-950">
                    Star Shrek
                </div>
            </div>
        </div>
    )
}