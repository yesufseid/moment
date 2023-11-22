import Wcard from '../Wcard'
import Dcard from '../Dcard'
import Pcard from '../Pcard'




type props={
  setCurrent:React.Dispatch<React.SetStateAction<React.ReactNode>>
}




export default function historySearch({setCurrent}:props) {





  return (
    <div className="flex justify-center items-center invisible md:visible bg-transparent ml-32">
       <button  onClick={()=>setCurrent(<Wcard />)} className="  active:bg-zinc-500 w-32 h-10 border-2 border-zinc-500 hover:bg-zinc-500 mx-2 rounded-full" >Waiting</button>
       <button  onClick={()=>setCurrent(<Pcard />)} className="w-32 h-10 border-2 border-zinc-500 hover:bg-zinc-500 mx-2 rounded-full" >Panding</button>
       <button  onClick={()=>setCurrent(<Dcard />)} className="w-32 h-10 border-2 border-zinc-500 hover:bg-zinc-500 mx-2 rounded-full" >Done</button>
    </div>
  )
}
