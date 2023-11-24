import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type dataProps={
    postId:string
  }


type coustemprops ={
    onSuccess:(test)=>void
    onError:(test)=>void
    data:dataProps
}

type dataprops={
    profile:[]
}
const getposts=({postId}:dataProps)=>{
    
    return request({ method:'get',
    url:'/giveaccesseProfile/'+postId,
    })
}

export const getprofile=({onError,onSuccess,data}:coustemprops)=>{ 
    console.log(data);     
return useQuery(['wdapi',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        return data.profile
    },
    // enabled:false
})
}