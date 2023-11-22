
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


type Props={
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}



export default function dropdown({setOpen}:Props) {
  return (
    <div className="flex justify-end items-center  cursor-pointer "   ><ArrowDropDownIcon onClick={()=>setOpen(prev=>!prev)} /></div>
  )
}

