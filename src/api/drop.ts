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
const getposts=({postId}:dataProps)=>{
    
    return request({ method:'get',
    url:'/user/userposts/accesse/'+postId,
    })
}

export const CoustemgetAccess=({onError,onSuccess,data}:coustemprops)=>{    
return useQuery(['access',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        return data.users
    },
    // enabled:false
})
}