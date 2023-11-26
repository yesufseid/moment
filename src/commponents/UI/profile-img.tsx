import { useState } from "react"
import { Coustemprofilelogo,CoustemprofilelogogetImg } from "../../api/profile-logo"
import MakeSession from "../../utils/useSession"

export default function Logoprofile(){
     const {session}=MakeSession()
     const [image,setimage]=useState<any>()
     const props ={
        onSuccess:(data)=>{
            console.log(data);
            
        },
        onError:(error)=>{
         return console.log(error);
         
        },
        data:{
            img:image,
            id:session().id
        }
      }
      const prop ={
        onSuccess:(data)=>{
             return setimage(data)  
        },
        onError:(error)=>{
         return console.log(error);
         
        },
        data:{
            id:session().id
        }
      }
   const {}=CoustemprofilelogogetImg(prop)
   const{refetch}=Coustemprofilelogo(props)
    const fileUplode=async(e)=>{
    const file=e.target.files[0]
    const Base64= await ConvertToBase64(file)
    setimage(Base64)
    return refetch()
            }
   
return (
      <div className=" cursor-pointer w-fit h-fit
      text-2xl ml-5  items-center flex justify-center
      text-center ">
        {/* {isLoading && (<div className="flex mx-2"><CircularProgress size={20}/></div>)} */}
     <label htmlFor="file"><img  src={image} alt="img "  className="w-24 h-24 border-2 border-sky-600 shadow-2xl rounded-full cursor-pointer" /></label>
     <input type="file"  id="file" className="my-5 invisible w-10" onChange={e=>fileUplode(e)}   />
     </div>
    )
  }

  function ConvertToBase64(file){
    return new Promise((resolve, reject) => {
       const fileReader=new FileReader()
       fileReader.readAsDataURL(file)
       fileReader.onload=()=>{
        resolve(fileReader.result)
       }
       fileReader.onerror=(error)=>{
        reject(error)
       }
    })
  }