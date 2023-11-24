import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"


type inputprops = {
        email:string
        password:string
}



type coustemprops ={
    data:inputprops
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}
 type userprops={
    id:string
    email:string
 }
type dataprops={
    accessToken:string
    message:string
    user:userprops
}
const getposts=(data:inputprops)=>{
    return request({ method:'post',
    url:'/login',
    data: {
          email:data.email,
          password:data.password}
    })
}

export const Coustemlogin=({onError,onSuccess,data}:coustemprops)=>{   
    console.log(data);
return useQuery(['user',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data:dataprops)=>{
       return data;
         
    },
    enabled:false
})
}