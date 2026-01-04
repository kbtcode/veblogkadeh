import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { getpost } from "../services/apipost";
import { useSelector } from "react-redux";


function Posts() {

    const [posts, setPosts] = useState([]);
    
     
    const SearchPost = useSelector(state => state.post.query)

    

    const filterPost = posts.filter
    (post => post.title.toLowerCase().includes(SearchPost.toLowerCase()))
    
     

    useEffect(function(){
    
    async function fetchpost(){
    
    try{
     
    const data = await getpost()    
    setPosts(data)
    
    }catch{
    
    throw new Error('failed to fetch posts')
    
    }
    
    }
    
    fetchpost()
    
    }, [])


    return ( 

        <ul className="w-[95%] space-y-5 my-10 flex items-center justify-center flex-wrap gap-4"> 

        {filterPost.map(item => 
        
        <PostItem item={item} key={item.id}/>
       
        )}
           
       </ul>
     );
}

export default Posts;