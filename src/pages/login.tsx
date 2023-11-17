import { useRef, useState } from "react";
import makeSession from "../utils/useSession"; 
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const ariaLabel = { 'aria-label': 'description' };
import {useNavigate } from "react-router-dom";
import  {Coustemlogin}  from "../api/login";
export default function login() {
  const Navigate=useNavigate()
  const [showPassword, setShowPassword] =useState(false)
  // const [email,setEmail]=useState("")
  const [pasword,setPassword]=useState("")
  const [error,setError]=useState(false)
  const [validat,setValidat]=useState(false)
  const email=useRef(null)
  
  
    const data={
        email:email.current.value,
        password:pasword
    }

const {Save}=makeSession()
const props ={
  onSuccess:(data)=>{
    const user={
              id:data.id,
              email:data.email,
              accessToken:data.accessToken
            }
    Save(user)
    return Navigate("/")  
  },
  onError:()=>{
   return setError(true)
  },
  data:data
}

const {refetch,isFetching}=Coustemlogin(props)
const handleSubmit=()=>{
  console.log(email.current.value);
  // if(email.length===0&&pasword.length===0) return setValidat(true)
  return refetch()
}



const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};
  return (
    <div className="bg-gradient-to-r from-ss to-dd h-screen w-screen">
    <div className=" md:absolute md:top-24 md:left-1/3" >
    <div className="flex justify-center md:w-96 md:h-96  h-screen  first-line:px-20 bg-slate-500  rounded-md shadow-2xl transition ease-out  hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="my-auto">
      <div className="pb-2 ml-1">
      <label htmlFor=""className="py-2" >Email</label><br />
        <Input  inputProps={ariaLabel}  ref={email}  /><br />
      </div>
       
       <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" className="ml-0">
          <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
          <Input
          onChange={(e)=>setPassword(e.target.value)}
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          
        </FormControl><br />

        <div>
        {error&&(<p className="text-red-600">wrong password</p>)}
          {validat&&(<p className="text-red-600">all fildes are requred</p>)}
          <button disabled={isFetching} onClick={()=>handleSubmit()} className="flex w-32 py-2 my-5 mx-auto bg-slate-200 hover:outline hover:bg-transparent justify-center
           rounded-full align-middle">{isFetching?(<h1>LOADING</h1>):(<h1>SignIn</h1>)}</button>
        </div>
        </div> 
    </div>
    </div>
    </div>
  )
}
