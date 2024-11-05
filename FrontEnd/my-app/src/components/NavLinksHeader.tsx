import { Link } from "react-router-dom"

function NavLinks(){
    return(
        <div className="flex gap-4 text-base pr-5">
            <Link className="text-rose-700" to="/about">
                About
            </Link>
            <Link to="/login">
                <button className=" bg-gradient-to-r  from-rose-500 to-indigo-400 cursor-pointer rounded-sm text-indigo-950 px-1 hover:scale-110 duration-200">Login</button>
            </Link>
        </div>
    )
}

export default NavLinks

