import { Link } from "react-router-dom"

function NavLinksHeaderSuccess(){
    return(
        <div className="flex gap-4 text-base pr-5">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">About</a>  
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <Link to="/">
                <button className=" bg-gradient-to-r  from-rose-700 to-red-800 cursor-pointer rounded-sm text-rose-950 px-1 hover:scale-110 duration-200">Logout</button>
            </Link>
        </div>
    )
}

export default NavLinksHeaderSuccess

