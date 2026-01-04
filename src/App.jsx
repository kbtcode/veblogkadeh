import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreatePost from "./Post/CreatePosts"
import Posts from "./Post/Posts"
import Post from "./Post/Post"
import LoginPage from "./ui/LoginPage"
import ProtectRoute from './ui/ProtectRoute'
import Userpage from "./user/Userpage"

const router = createBrowserRouter([


    {
        path: "/login",
        element: <LoginPage />
      },
    
      // 🔐 PROTECTED
      {
        path: "/",
        element: <ProtectRoute />,
        children: [
          
    
              { index: true, element: <Posts /> },
              { path: "post/:postId", element: <Post /> },
              { path: "/createpost", element: <CreatePost /> },
              { path:'/userinfo', element: <Userpage />}
            
          
        ]
      }
    ]);


function App() {

    return <RouterProvider router={router} />

}

export default App
