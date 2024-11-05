export default function Card1(){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex bg-indigo-500 opacity-40 w-11/12 rounded-lg hover:scale-105 ease-in-out duration-500">
                <img className="w-[250px] h-[250px]" src="../public/images/GetShreked.jpeg" alt="GotShreked"></img>
                <div className="ml-2 items-center justify-center flex text-3xl font-semibold text-indigo-950">A thrilling intergalactic struggle between the tyrannical Lord Farquaad's empire and the people's favourite liberating green ogre</div>
            </div>
        </div>
    )
}