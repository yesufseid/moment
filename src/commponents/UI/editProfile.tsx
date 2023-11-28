import { useState} from "react"
import { Coustemprofilelogo, } from "../../api/profile-logo"
import MakeSession from "../../utils/useSession"
type props = {
  images:string
}

export default function Logoprofile({images}:props){
     const {session}=MakeSession()
    const [image,setimage]=useState<any>()
     const props ={
        onSuccess:(data)=>{
           return data  
        },
        onError:(error)=>{
         return console.log(error);
         
        },
        data:{
            img:image,
            id:session().id
        }
      }
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
      textenter ">
     <label htmlFor="file">
      <img  src={images} alt="img "  className="w-24 h-24 border-2 border-sky-600 shadow-2xl rounded-full cursor-pointer" /></label>
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