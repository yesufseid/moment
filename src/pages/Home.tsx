import Navbar from "../commponents/Navbar"
import Profile from "../commponents/Profile"


export default function Home() {




  return (
    <div className='bg-white h-screen bg-gradient-to-r from-Richblack to-bray '>
      <div>
      </div>
        <Navbar />
        <Profile />
        {/* {open?(<Login />):null} */}
    </div>
  )
}
