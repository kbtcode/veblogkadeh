import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatequery } from "./postSlice";

function SearchPost() {

   const [query, setQuery] = useState('');
   const dispatch = useDispatch()


    dispatch(updatequery(query))

    

    return ( 

     <div>
     <input placeholder="search here..." className="bg-transparent border p-2 w-60 rounded-2xl 
     outline-none transition-all duration-500 focus:w-64 focus:ring-1 focus:ring-white  "
       value={query} onChange={(e) => setQuery(e.target.value)}/>      
     </div>


     );
}

export default SearchPost;