import { useState } from "react";
import { createpost } from "../services/apipost";
import { useNavigate } from "react-router-dom";

function CreatePost() {

const [newtitle , setNewtitle] = useState('')
const [newdescript , setNewdescript] = useState('')
const [newauthor , setNewauthor] = useState('')
    
const navigate = useNavigate('')

 async function handlesubmit(e){

  e.preventDefault();

  if(!newtitle.trim() || 
  !newdescript.trim() || 
  !newauthor.trim()  ) return

  const newpost = {

  id:crypto.randomUUID(),
  title: newtitle,
  author: newauthor,
  about: newdescript

  }
  
 await createpost(newpost)
  
 navigate('/')

  }


 return ( 
 
 <div className="flex flex-col items-center">

   <form onSubmit={handlesubmit} method="POST" className="flex flex-col gap-5
   mt-15 bg-linear-0 from-emerald-500 to-neutral-700 p-8 rounded-xl text-white">

   <div className="w-full flex justify-center items-center mb-4">
  <h1 className="font-mono text-xl font-semibold ">Add new post</h1>
</div>

<div className="flex items-center gap-4">
<div className="flex flex-col gap-1.5">
  <label className="text-sm" for="post">post name</label>  
 <input type="text" className="border rounded-lg w-full outline-none p-1  transition-all
 duraiton-500 focus:ring-2 ring-white"
 value={newtitle} onChange={(e) => setNewtitle(e.target.value)} />

 </div>
 <div className="flex flex-col gap-1.5 ">
 <label className="text-sm" for="author">author</label>
 <input type="text" className="border rounded-lg w-full p-1 outline-none transition-all
 duraiton-500 focus:ring-2 ring-white"
  value={newauthor} onChange={(e) => setNewauthor(e.target.value)} />
 </div>
</div>

<div className="flex flex-col gap-1.5">
   <label className="text-sm" for="descript">about</label> 
 <textarea type="text" className="border rounded-lg h-28 w-[395px] outline-none p-1 transition-all
 duraiton-500 focus:ring-2 ring-white"
 value={newdescript} onChange={(e) => setNewdescript(e.target.value)} />


 <button className="my-11  p-3 w-1/3 mx-auto bg-white/20 
  rounded-2xl cursor-pointer transition-all duration-500 border-none hover:scale-110">Add Post</button>
</div>

   </form>  

</div>
 );
}

export default CreatePost;