import MenuIcon from '@mui/icons-material/Menu';
 type Iconprops={
    onClick:()=>void
 }


export default function Toggle({onClick}:Iconprops) {
  return (
    <div>
        <MenuIcon onClick={onClick} fontSize='large' />
    </div>
  )
}
