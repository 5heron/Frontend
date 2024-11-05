import { Link } from "react-router-dom"
import {Clist} from "./Data"
import { MdChevronLeft, MdChevronRight } from "react-icons/md"

function MainBody(){

    const SlideSmallLeft = ()=>{
        var slider = document.getElementById('SliderSmall')
        slider!.scrollLeft = slider!.scrollLeft - 950
      }
    
    
      const SlideSmallRight = ()=>{
        var slider = document.getElementById('SliderSmall')
          slider!.scrollLeft = slider!.scrollLeft + 950
      }
    
    return(
        <>
            <div className="flex self-center">
                <Link to="/bookingpage">
                <button className="bg-gradient-to-r p-7 text-pretty text-4xl mx-5 my-4 from-rose-500 to-indigo-400 cursor-pointer rounded-full text-indigo-950 hover:scale-110 duration-200 font-extrabold ">
                    Movie Booking
                </button>
                </Link>
            </div>
            <div className="flex p-2 mx-9 max-h-svh text-3xl flex-col justify-center items-center font-mono text-pretty text-white text-justify">
            *Welcome to Skibidi Theater – Where Drama Meets Destiny*

Step into the extraordinary. At Skibidi Theater, we don’t just put on shows – we ignite passions, stir emotions, and weave stories that linger long after the final curtain falls. Here, the boundaries between reality and imagination blur, creating a world where every performance is an epic journey. 

Prepare to be transported into the heart of human experience, where every moment is charged with intensity and every character, every scene, is a brushstroke of brilliance. From gut-wrenching tragedies and heart-pounding thrillers to soul-stirring comedies and avant-garde performances, Skibidi Theater offers a stage where anything can happen.

This season, we invite you to experience the unexpected, the unforgettable, and the unrelenting power of live theater. Dare to witness the magic. Your next transformative evening begins at Skibidi Theater.
                <div className="text-pretty p-5 text-4xl font-extrabold text-white">Why not try some of these?</div>
            </div>
            <div className="relative flex item-center">
            <MdChevronLeft className="self-center opacity-50 hover:opacity-100" onClick={SlideSmallLeft} size={40} color="pink"/>
            <div id="SliderSmall" className="mb-20 scrollbar-hide w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth">
            {Clist.map((item)=> (
                <img className="w-[400px] h-[250px] inline-block p-4 hover:scale-105 ease-in-out duration-500" 
                src={import.meta.env.BASE_URL + item.image} 
                alt="cover images" />
            ))}
            </div>
            <MdChevronRight className="self-center opacity-50 hover:opacity-100" onClick={SlideSmallRight} size={40} color="pink"/>
            </div>
        </>
    )
}

export default MainBody