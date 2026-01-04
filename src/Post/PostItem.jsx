import { useNavigate } from "react-router-dom";

function PostItem({item}) {

 const navigate = useNavigate()

    return ( 
    
    <li className="list-none w-[350px] rounded-2xl bg-white h-56 p-6  shadow-sm  text-gray-400/70 border border-gray-400/20 font-semibold">
        
    <h1 className="leading-8 border-b border-b-amber-200 pb-0.5">{item.title}</h1>

     <p className="pt-0.5">{item.about}</p>

     <button className="mt-11 border border-sky-200  p-2.5 rounded-sm  cursor-pointer
     transition-all duration-500 text-sky-300 hover:bg-sky-300 hover:text-white" 
     onClick={() => navigate(`/post/:${item.id}`)}>see more</button>

    </li> 

);
}

export default PostItem;