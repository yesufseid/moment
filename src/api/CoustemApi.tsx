import { useQuery } from "@tanstack/react-query";
import {getallPost,} from "./post"







export const Coustemgetallpost=(location)=>{
    console.log(location);   
return useQuery({
    queryKey:["posts"],
    queryFn:getallPost
})
}