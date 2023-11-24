import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"


type inputprops = {
        email:string
        password:string
        firstname:string
        lastname:string
}



type coustemprops ={
    data:inputprops
    onSuccess:(test)=>unknown
    onError:(test)=>unknown
}
//  type userprops={
//     id:string
//     email:string
//  }
// type dataprops={
//     accessToken:string
//     message:string
//     user:userprops
// }
const getposts=({email,password,firstname,lastname}:inputprops)=>{
    return request({ method:'post',
    url:'/register',
    data: {
          email:email,
          password:password,
          firstname:firstname,
          lastname:lastname,
        }
    })
}

export const Coustemregister=({onError,onSuccess,data}:coustemprops)=>{   
    console.log(data);
return useQuery(['register',data],()=>getposts(data),{
    onSuccess,
    onError,
    select:(data)=>{
       return data     
    },
    enabled:false
})
}