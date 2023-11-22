import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type dataProps={
    userId:string
    authorId:string
  }


type coustemprops ={
    onSuccess:(test)=>void
    onError:(test)=>void
    data:dataProps
}

type dataprops={
    AllPosts:[]
}
const getposts=({userId,authorId}:dataProps)=>{
    
    return request({ method:'post',
    url:'/post/activitiy',
    data: {
        userId:userId,
        authorId:authorId
    }
    })
}

export const CoustemgetAccess=({onError,onSuccess,data}:coustemprops)=>{    
return useQuery(['posts',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        console.log(data.AllPosts);
        return data.AllPosts 
    },
    enabled:false
})
}