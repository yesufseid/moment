import axios from "axios";
const client=axios.create({baseURL:'http://localhost:3000/api'})

export const  request=({...options})=>{
  console.log("dddd");
    const session=window.localStorage
  const accessToken=session.accessToken
    client.defaults.headers.common.Authorization=accessToken
    const onSuccess=(response)=>console.log(response);
    const onError=(error)=>{
        return console.log(error);
        
        
    }
    
    
    return client(options).then(onSuccess).catch(onError)
}



// method: 'post',
// url: '/user/12345',
// data: {
//   firstName: 'Fred',
//   lastName: 'Flintstone'