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
  const radis=Number(raduis)/115
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
    <div className="md:flex md:justify-center md:items-center text-bold grid grid-cols-2 gap-2  place-content-between md:bg-transparent 
    h-24 md:h-10 absolute top-24 left-5  md:static  ">
      <div className="flex items-center font-serif ">
      <label>Lat</label>
       <input type="number" placeholder="38.456" className=" md:w-32 w-24 h-10 bg-slate-500  md:mx-2
        md:ml-7 border-2 border-zinc-950 rounded-2xl ml-8" onChange={handlelatChange} />
      </div>
       <div  className="flex items-center">
       <label>Long</label>
       <input type="number"  onChange={handlelongChange} placeholder="38.5642" className=" bg-slate-500 md:w-32 w-24 mx-2 h-10  border-2 border-zinc-950 rounded-2xl" />
       </div>
       <div  className="flex items-center">
       <label>Raduis</label>
       <input type="number" onChange={handleRaduisChange} placeholder="38.5642" className=" bg-slate-500 md:w-32 w-24 mx-2 border-2 h-10 border-zinc-950 rounded-2xl" />
       </div>
       <button onClick={handleSubmit} className="w-32 py-2  border-2 border-white rounded-2xl 
       ml-8 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  
       md:ml-8 hover:bg-white">Search</button>
    </div>
  )
}
