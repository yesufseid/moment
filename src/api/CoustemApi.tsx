import { useQuery } from "@tanstack/react-query";
import {getallPost,} from "./post"







export const Coustemgetallpost=(onSuccess,onError)=>{
    console.log(location);   
return useQuery(['posts'],getallPost,{
    onSuccess,
    onError,
    select:(data)=>{
        return data.AllPosts
    }
})
}