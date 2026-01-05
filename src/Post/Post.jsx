import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deletepost, getpost } from "../services/apipost";



function Post() {

const { postId } = useParams();
const [post, setPost] = useState(null);
const navigate = useNavigate()

const editId = postId.replace(':', '')



useEffect(function(){

async function fetchpost(){

   try{ 
    const data = await getpost();
    
    const SelectedPost = data.find((post) => String(post.id) === editId);
    
    setPost(SelectedPost);
   }catch{
    throw new Error('can not fetch post')
   }


}

fetchpost();
    
}, [editId]);


 function deleteitem(){

deletepost(editId)

navigate('/')


}

    return (
        
        <div className="p-5 space-y-1.5 h-screen flex flex-col text-white">

        <p>post {editId}</p>
        <h1>{post?.title}</h1>

        <p>{post?.about}</p>

        <span className="underline text-orange-300">{post?.author}</span>

        <Link className="text-slate-400 transition-all duration-500 hover:text-slate-500" to='/'>&larr; Back to home</Link>

        <button className="bg-red-600 py-2 px-2 mt-8 w-1/3 rounded-2xl cursor-pointer flex items-center justify-center gap-3" onClick={deleteitem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
  <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clip-rule="evenodd" />
</svg>

        delete</button>

        </div> 
    
    
    );
}

export default Post;