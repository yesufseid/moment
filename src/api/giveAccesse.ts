import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type dataProps={
    userId:string
    postId:string
  }


type coustemprops ={
    onSuccess:(test)=>void
    onError:(test)=>void
    data:dataProps
}

type dataprops={
    users:[]
}
const getposts=({postId,userId}:dataProps)=>{
    console.log(postId);
    
    return request({ method:'post',
    url:'/giveaccesse',
    data:{
        postId:postId,
        userId:userId
    }
    })
}
export const CoustemgiveAccesse=({onError,onSuccess,data}:coustemprops)=>{       
return useQuery(['posts',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        return data
    },
    enabled:false
})
}