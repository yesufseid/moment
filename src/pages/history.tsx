import {useState} from "react"
import Layout from "../commponents/Layout"
import MakeSession from "../utils/useSession"; 
import { useNavigate } from 'react-router-dom';
import HistorySearch from '../commponents/UI/historySearch';
import Wcard from '../commponents/Wcard'




export default function AlignItemsList() {
  const{Expair}=MakeSession()
  const Navigat=useNavigate()
  const [Current,setCurent]=useState<React.ReactNode>(<Wcard />)
  if(!Expair())  Navigat("/login")

  return (
    <div className=' bg-gradient-to-r  from-bottem from-0% via-xx via-40% to-bb to-150%  items-center h-screen'>
    <Layout  search={<HistorySearch    setCurrent={setCurent} />} />
    {Current}
      </div>
  );
  
}
