

export default function Search() {
  return (
    <div className="flex justify-center items-center text-bold md:grid md:grid-cols-2 md:gap-2 md:place-content-between 
    h-24 md:absolute md:top-24  ">
      <div className="flex">
      <label>Lat</label>
       <input type="text" placeholder="38.5642" className="w-32 mx-2 md:ml-7 border-2 border-zinc-950 rounded-2xl " />
      </div>
       <div  className="flex">
       <label>Long</label>
       <input type="text"  placeholder="38.5642" className="w-32 mx-2 border-2 border-zinc-950 rounded-2xl" />
       </div>
       <div  className="flex">
       <label>Raduis</label>
       <input type="text"  placeholder="38.5642" className="w-32 mx-2 border-2 border-zinc-950 rounded-2xl" />
       </div>
       <button className="w-32 py-2  border-2 border-white rounded-2xl ml-5 bg-sky-600  md:ml-10 hover:bg-white">Search</button>
    </div>
  )
}
