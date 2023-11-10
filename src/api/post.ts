

 export const getPost =async () => {
  const res=await fetch("semntun-beterik-api.vercel.app/api/post/4",{
    method:"GET"
  })
  const post=res.json()
  return post
}

export const getallPost =async()=> {
  console.log("hellow");
  
  const session=window.localStorage
  const accessToken=session.accessToken
   
  const res=await fetch("http://localhost:3000/api/allposts/allposts?location=",{
     method:"GET",
     headers: {
      'Content-Type': 'application/json',
      'Authorization':accessToken
    },
   }).then((res)=>{
    res.json().then((data:unknown)=>data)
   })
   
 }
 
 export const DeletePost =async (id) => {
  const session=window.localStorage
  const accessToken=session.accessToken
   
  const res=await fetch("https://semntun-beterik-api.onrender.com/api/post/"+id,{
     method:"DELETE",
     headers: {
      'Content-Type': 'application/json',
      'Authorization':accessToken
    },
   })
   const post=res.json()
   return post
 }







