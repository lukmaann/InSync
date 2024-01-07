import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import EditorPage from "./pages/EditorPage/EditorPage"
const routes=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/editor/:roomId",
    element:<EditorPage/>
  }
])
const App = () => {

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App