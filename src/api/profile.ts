import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"


type dataprops={
    phone?:{}
    Telegram?:{}
    Instagram?:{}
    Facebook?:{}
    X?:{}
    Website?:{}
    id?:{}
}

type coustemprops ={
    data:dataprops
    onSuccess:(test)=>void
    onError:(test)=>void
}
const setprofile=({id,phone,Telegram,Instagram,Facebook,X,Website}:dataprops)=>{
    console.log(phone);
    
    return request({
        method:'post',
        url: '/user/userprofile',
        data: {
      phone:phone,
      Telegram:Telegram,
      Instagram:Instagram,
      Facebook:Facebook,
      X:X,
      Website:Website,
          id:id,
          }})
}

export const Coustempostprofile=({onSuccess,onError,data}:coustemprops)=>{      
return useQuery(['profiles',data],()=>setprofile(data),{
    onSuccess,
    onError,
    select:(data:[])=>{
        return data  
    },
    enabled:false
})
}