import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Erro from './routes/Erro.jsx'
import Jogo from './routes/Jogo.jsx'
import Login from './routes/Login.jsx'
import Home from './routes/Home.jsx'
import Clientes from './routes/Clientes.jsx'
import Tecnologias from './routes/Tecnologias.jsx'

const router = createBrowserRouter([{
  path:'/', element: <App/>,
  errorElement: <Erro/>,
  
  children:[
    {path:'/',element: <Home/>},
    {path:'/clientes',element: <Clientes/>},
    {path:'/login',element: <Login/>},
    {path:'/jogo',element: <Jogo/>},
    {path:'/tecnologias',element: <Tecnologias/>}


  ]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
