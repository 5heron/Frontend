import { Link } from "react-router-dom"

function NavLinksHeaderSuccess(){
    return(
        <div className="flex gap-4 text-base pr-5">
            <Link className="text-rose-700" to="/aboutsuccess">
                About
            </Link>
            <Link to="/">
                <button className=" bg-gradient-to-r  from-rose-700 to-red-800 cursor-pointer rounded-sm text-indigo-950 px-1 hover:scale-110 duration-200">Logout</button>
            </Link>
        </div>
    )
}

export default NavLinksHeaderSuccess

