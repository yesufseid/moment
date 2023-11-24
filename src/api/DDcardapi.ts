import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"

type dataProps={
    authorId:string
  }


type coustemprops ={
    onSuccess:(test)=>void
    onError:(test)=>void
    data:dataProps
}

type dataprops={
    profile:[]
}
const getposts=({authorId}:dataProps)=>{
    
    return request({ method:'get',
    url:'/giveDDprofile/'+authorId,
    })
}

export const getprofile=({onError,onSuccess,data}:coustemprops)=>{     
return useQuery(['profile',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
        console.log(data.profile);
        return data.profile
    },
    // enabled:false
})
}