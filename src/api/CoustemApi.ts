import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

// type coustemprops ={
//     location:number
// }
const getposts=(location)=>{
    console.log(location);
    return request({ method:'get',
    url:'/allposts/allposts?location='+90,
    })
}

export const Coustemgetallpost=(location)=>{    
return useQuery(['posts',location],()=>getposts(location))
}