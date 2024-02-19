import React from "react";
import {FcLike , FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickhandler() {
        // logic
        if(likedCourses.includes(course.id)) {
            // phele se like hoa hai
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else{
            // phele se like nhi hai
            // insert karna h ye course liked courses me
            if (likedCourses.length === 0 ){
                setLikedCourses([course.id]);

            }
            else {
                // non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully")
        }
    }
    return ( 
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>

            <div className='relative '>
                <a href="https://www.geeksforgeeks.org/web-development/"><img src={course.image.url} ></img></a>

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickhandler} >
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem"></FcLike> ) :
                        (<FcLikePlaceholder fontSize="1.75rem" /> ) 
                    }
                </button>    
            </div>
            </div>
            
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white' >
                    {
                        course.description.length > 100 ? 
                        (props.course.description.substring(0, 100) + "...") : 
                        (props.course.description)
                    }
                </p>
            </div>

        </div>
    )
}

export default Card;