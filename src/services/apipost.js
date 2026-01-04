

const URL = 'http://localhost:8500'


export async function getpost(){

const res = await fetch(`${URL}/posts`)


return await res.json();

}


export async function createpost(newpost){

const res = await fetch(`${URL}/posts`, {

method:'POST',
body: JSON.stringify(newpost),
headers: {

'Content-Type': 'application/json'

}

});

return res;


}


export async function deletepost(id){


const res = await fetch(`${URL}/posts/${id}`, {

 method: 'DELETE'

 })

const data = await res.json()

return data.filter(post => post.id.toString() !== id)

}