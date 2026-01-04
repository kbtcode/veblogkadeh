import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmail, updateName, updatePassword } from "../user/userSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const dispatch = useDispatch()

const navigate = useNavigate()

function handleloginsubmit(e){

e.preventDefault();

if(!name.trim() || 
!email.trim() || !password.trim()) return;


dispatch(updateName(name))
dispatch(updateEmail(email))
dispatch(updatePassword(password))

navigate('/')

}

    return ( 

 
<form onSubmit={handleloginsubmit} className="space-y-3 rounded-2xl  bg-white/20 shadow-xs backdrop-blur-md  mx-auto w-96 h-96 py-9 mt-10 flex flex-col justify-center items-center
max-sm:w-[90%]">

<div className="w-full flex justify-center items-center">
<h1 className=" font-bold text-lg text-white">Login here</h1>   
</div>

<div className="flex flex-col">
 <label className="text-sm  text-white/70" for="name">name</label>   
 <input className=" rounded-xl outline-none py-1.5 px-3.5 text-white bg-yellow-100/50" type="text" 
    value={name} onChange={(e) => setName(e.target.value)} />
</div>
    
 <div className="flex flex-col">
    <label className="text-sm text-white/70" for="email">email</label>
    <input className=" rounded-xl outline-none py-1.5 px-3.5 text-white bg-yellow-100/50" type="text" 
    value={email}  onChange={(e) => setEmail(e.target.value)} />
</div>
       
<div className="flex flex-col">
  <label className="text-sm text-white/70" for="password">password</label>
  <input className=" rounded-xl outline-none py-1.5 px-3.5 text-white bg-yellow-100/50" type="text" 
  value={password} onChange={(e) => setPassword(e.target.value)}/>
</div>  

<button className=" bg-white p-4 font-semibold mt-9 cursor-pointer w-[90%] rounded-2xl transition-all duration-500 
hover:rounded-4xl  hover:shadow-md hover:shadow-yellow-300/50">Login</button>

    </form>




     );
}

export default LoginPage;