import { Navigate, Outlet,  } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";






function Home() {

  const user = useSelector((state) => state.name.user.name)  

 console.log(user);
 
  
   if(!user.trim()) return <Navigate to='/login' replace/>

    return ( 

<>
     <Header />   
<div className="flex justify-center items-center">

     <main className="flex justify-center items-center w-[90%] flex-wrap">

    

<Outlet />


</main>   
</div>

</>
    


);
}

export default Home;