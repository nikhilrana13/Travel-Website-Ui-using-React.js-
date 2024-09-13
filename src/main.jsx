
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Beach from "./Components/Categories/Beach"
import Desert from "./Components/Categories/Desert"
import Home from "./Components/Categories/pages/Home"




const router = createBrowserRouter([
  {
    path:"",
    element:<Home />
  },

  {
  path:"/Beach",
  element:<Beach />
  },
  {
    path:"/Desert",
    element:<Desert />
  }

])


const root = createRoot(document.getElementById("root"))

root.render(
  <RouterProvider router={router} />
)