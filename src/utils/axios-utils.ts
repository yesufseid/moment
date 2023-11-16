import axios from "axios";

import MakeSession from "./useSession";
const client=axios.create({baseURL:'https://moment-api-27e3.onrender.com/api'})
export const  request=({...options})=>{
  const {session}=MakeSession()
    client.defaults.headers.common.Authorization=session().accessToken
    const onSuccess=(response)=>response.data
    // const onError=(error)=>{
    //     return error
    // }
    
    
    return client(options).then(onSuccess)
}


// .catch(onError)
// method: 'post',
// url: '/user/12345',
// data: {
//   firstName: 'Fred',
//   lastName: 'Flintstone'