import { createBrowserRouter , RouterProvider } from "react-router-dom";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";


import Home from "@/screens/home";

import '@/index.css';
import * as path from "path";


const paths = [
   {
    path: '/',
    element: (
      <Home/>
    )
   }
]

const BrowerRouter = createBrowserRouter(paths);

const App = () =>{
  return(
    <MantineProvider>
    <RouterProvider router={BrowerRouter}/>
   </MantineProvider>
  );
 
}

export default App ; 