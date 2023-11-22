import { useState } from "react"
import { Coustemprofilelogo } from "../../api/profile-logo"
import MakeSession from "../../utils/useSession"
import CircularProgress from '@mui/material/CircularProgress';

export default function Logoprofile(){
     const {session}=MakeSession()
     const [image,setimage]=useState<unknown>()
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

   const{isFetching}=Coustemprofilelogo(props)
    const fileUplode=async(e)=>{
    const file=e.target.files[0]
    const Base64= await ConvertToBase64(file)
    return setimage(Base64)
            }
   
return (
      <div className="w-20 h-20 border-2 border-sky-600 shadow-2xl rounded-full cursor-pointer
      text-2xl ml-14 mb-2 mt-5 items-center flex justify-center
       hover:bg-sky-600 text-center ">
        {isFetching?(<div className="flex mx-2"><CircularProgress size={20}/></div>):(<div>
     <label htmlFor="file">{image?(<img  src={image} alt="img" />):(null)}</label>
     <input type="file"  id="file" className="my-5 invisible " onChange={e=>fileUplode(e)}   />
     </div>)}
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