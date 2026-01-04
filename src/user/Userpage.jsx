import { useDispatch, useSelector } from "react-redux";
import { ExitUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

function Userpage() {
    
    const user = useSelector(state => state.name.user)

 console.log(user);

 const { name , email , password } = user 
 
//  console.log(name);
//  console.log(email);

const navigate = useNavigate()
 
 const dispatch = useDispatch()

 function logout(){

  dispatch(ExitUser())

 navigate('/login')

 }

    return (


      
      <div className="w-72 h-72 p-5 flex flex-col justify-between bg-neutral-500 
      rounded-2xl text-white mt-10">

   <div className="flex flex-col gap-1">     
   <h1 className="font-semibold">username: {name}</h1>
   <p>email: {email} </p>
   <p>password: {password}</p>
</div>


  <button onClick={logout} className="mt-15 cursor-pointer  bg-yellow-400 text-white p-2.5 rounded-xl
  transition-color font-extrabold duration-500 hover:bg-emerald-300">logout</button>

    </div>



    );
}

export default Userpage;