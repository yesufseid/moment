// Render Prop

import { Formik, Form, Field, ErrorMessage } from 'formik';
import {NavLink} from "react-router-dom"
import makeSession from "../../utils/useSession"; 
import {useNavigate } from "react-router-dom";
import  {Coustemregister}  from "../../api/register";
import {useState} from "react"
import CircularProgress from '@mui/material/CircularProgress';

type userprops={
  id:string
  email:string
}
type datprops={
  accessToken:string
  message:string
  user:userprops
}

type inputprops = {
  email:string
  password:string
  firstname:string
  lastname:string
}
export default function Basic(){
    const [valuses,setValuse]=useState<inputprops>()
    const Navigate=useNavigate()
    // const {Save}=makeSession()
    const props ={
      onSuccess:()=>{
        // const users={
        //           id:user.id,
        //           email:user.email,
        //           accessToken:accessToken
        //         }
        // Save(users)
        alert("you are Success fully registerd please SignIn")
        return Navigate("/login")  
      },
      onError:(error)=>{
       return console.log(error);
       
      },
      data:valuses
    }
    
    const {refetch,isFetching}=Coustemregister(props)
 return ( 
  <div className='flex justify-center h-screen w-screen  bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150% '>
    <Formik
      initialValues={{ email:'', password:'',firstname:'',lastname:''}}
      validate={values => {
        const errors:inputprops={}
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setValuse(values)
        refetch()
        setSubmitting(false);
       
      }}
    >
      {({ isSubmitting }) => (
        <div className='border-2 border-black rounded-lg bg-slate-400 w-fit h-screen px-5 '>
            <h1 className='font-serif font-semibold text-center' >Wellcome to Moment</h1>
            <NavLink  to={"/login"} className="flex w-32 py-2 my-2 ml-48 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mx-auto justify-center
           rounded-full align-middle">
            SignIn
          </NavLink>
          <NavLink to={"/help"} className="font-serif font-extrabold my-5 text-sky-600 ml-52 "  > Help ?</NavLink>
        <Form >
         <label  className='text-left font-serif  font-semibold'>First Name *</label><br />
          <Field type="text" name="firstname" className="w-80 h-12 my-2 bg-slate-900 border-2 rounded-2xl" /><br />
          <ErrorMessage name="password" component="div" />
          <label  className='text-left font-serif  font-semibold'>Last Name *</label><br />
          <Field type="text" name="lastname" className="w-80 h-12 my-2 bg-slate-900 border-2  rounded-2xl" /><br />
          <ErrorMessage name="password" component="div" />

         <label className='text-left font-serif font-semibold '>Email *</label><br />
          <Field type="email" name="email"  className="w-80 h-12 my-2 bg-slate-900 border-2 rounded-2xl from-slate-900" /><br />
          <ErrorMessage name="email" component="div" className='text-red-900' />
          <label  className='text-left font-serif  font-semibold'>password</label><br />
          <Field type="password" name="password" className="w-80 h-12 my-2 bg-slate-900 border-2 rounded-2xl" /><br />
          <ErrorMessage name="password" component="div" />
        
          <button type="submit" disabled={isSubmitting}    className="flex w-32 py-2 my-5 mx-auto border-2 border-zinc-950 text-white  hover:bg-zinc-950  justify-center
           rounded-full align-middle">
            {isFetching?(<div className="flex mx-2"><CircularProgress size={20}/></div>):(<h1>SignUp</h1>)}
          </button>
        </Form>
        <NavLink to={"/help"} className="font-serif font-extrabold my-5 text-sky-600 ml-40"  >Forget Password</NavLink>
        </div>
      )}
    </Formik>
  </div>
);
}
