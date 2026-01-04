import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchPost from "../Post/SearchPost";

function Header() {

 const name = useSelector(state => state.name.user.name)
  

    return ( 

  <header  className="mx-auto flex justify-between items-center mt-5 w-[70%] bg-linear-30 from-neutral-400 to-neutral-600
  h-16 gap-6 p-3 rounded-lg text-white mb-9 ">

  <SearchPost />

 <ul className="flex gap-7 justify-center items-center">
   <li><Link className="trnasition-all duration-300 hover:text-emerald-300" to='/'>Home</Link></li>
   <li><Link className="trnasition-all duration-300 hover:text-emerald-300 tracking-wide" to='/createpost'>CreatePost</Link></li>
</ul>

<div className="flex justify-end bg-amber-200/40 px-5 py-2 rounded-lg">
   {name ? <Link to='/userinfo' className="trnasition-all duration-300 hover:text-emerald-300">{name}</Link> : 
   <Link className="trnasition-all duration-300 hover:text-emerald-300" to='/login'>Login</Link> }
</div>

  </header>


     );
}

export default Header;