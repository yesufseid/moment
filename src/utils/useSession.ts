
interface sessionProp{
    id?:string
    email?:string
    accessToken?:string
}


const MakeSession=()=>{
    const Session=window.localStorage
    const now = new Date()
    const Expair=()=>{
        let root=true
        if (!Session) {
              return root=false
          }
        if(Session.length===0)  root=false
        if (now.getTime() >  Number(Session.expiry)) {
              localStorage.clear()
              return root=false
          }

          return root
    }
   
const Save=({id,email,accessToken}:sessionProp)=>{
    const time=String(now.getTime()+60*60*24*30)
    console.log(time);
    
    Session.setItem("id",id)
    Session.setItem("email",email)
    Session.setItem("accessToken",accessToken)
    Session.setItem("expiry",time)
}
const session=()=>{
    if (now.getTime() >  Number(Session.expiry)) {
		localStorage.clear()
		return null
	}
    return {
        id:Session.getItem("id"),
        email:Session.getItem("email"),
        accessToken:Session.getItem("accessToken"),
    }
}

const Clear=()=>{
   return Session.clear()
}

  return {Save,session,Clear,Expair}
}


export default MakeSession