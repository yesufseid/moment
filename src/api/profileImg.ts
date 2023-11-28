import { useQuery } from "@tanstack/react-query";
import {request} from "../utils/axios-utils"



type coustemprops ={
    id:string
    onSuccess:(test)=>void
    onError:(test)=>void
}
type dataprops={
    profile:[]
}


const getprofileImg=(id:string)=>{
    console.log("seya");
    
    return request({
        method:'get',
        url: '/user/getprofileImg/'+id,
        })
}
export const CoustemprofilelogogetImg=({onSuccess,onError,id}:coustemprops)=>{    
    return useQuery(['profilelogoImg',id],()=>getprofileImg(id),{
        onSuccess,
        onError,
        select:(data:dataprops)=>{ 
            return data.profile  
        },
        refetchOnMount:false,
        // refetchOnWindowFocus:false
    })
    }






