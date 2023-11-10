import { useState } from "react"

type searchParam={
  fun:(text)=>void
}



export default function Search({fun}:searchParam) {
  const[lat,setLat]=useState("")
  const[long,setLong]=useState("")
  const[raduis,setRaduis]=useState("")
 

 const handleSubmit=()=>{
  const lats=Number(lat)
  const longs=Number(long)
  const radis=Number(raduis)
 const resultant:number=lats*lats+longs*longs
 const location=Math.sqrt(resultant)+radis
 return fun(location)
 }









  const handlelatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setLat(event.target.value);
  };
  const handlelongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setLong(event.target.value);
  };
  const handleRaduisChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setRaduis(event.target.value);
  };

  return (
    <div className="md:flex md:justify-center md:items-center text-bold grid grid-cols-2 gap-2  place-content-between
    h-24 md:h-10 absolute top-24 left-5  md:static  ">
      <div className="flex">
      <label>Lat</label>
       <input type="number" placeholder="38.5642" className=" md:w-32 w-24 h-10  md:mx-2
        md:ml-7 border-2 border-zinc-950 rounded-2xl ml-8" onChange={handlelatChange} />
      </div>
       <div  className="flex">
       <label>Long</label>
       <input type="number"  onChange={handlelongChange} placeholder="38.5642" className="md:w-32 w-24 mx-2 h-10  border-2 border-zinc-950 rounded-2xl" />
       </div>
       <div  className="flex">
       <label>Raduis</label>
       <input type="number" onChange={handleRaduisChange} placeholder="38.5642" className="md:w-32 w-24 mx-2 border-2 h-10 border-zinc-950 rounded-2xl" />
       </div>
       <button onClick={handleSubmit} className="w-32 py-2  border-2 border-white rounded-2xl ml-8 bg-sky-600  md:ml-10 hover:bg-white">Search</button>
    </div>
  )
}
