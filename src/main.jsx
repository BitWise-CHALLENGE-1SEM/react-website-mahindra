import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'

const router = createBrowserRouter([{
  path:'/', element: <App/>,
  errorElement: <Erro/>,
  
  children:[
    {path:'/',element: <Home/>},
    {path:'/clientes',element: <Clientes/>},
    {path:'/cadastrar',element: <Cadastrar/>},
    {path:'/jogo',element: <Jogo/>}



  ]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
