import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Begin from './pages/Begin.jsx'
import Game from './pages/Game.jsx'
import Result from './pages/Result.jsx'
import Bye from './pages/Bye.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />  
    },
    {
        path: "/begin",
        element: <Begin />
    },
    {
        path: "/game",
        element: <Game />
    },
    {
        path: "/result",
        element: <Result />
    },
    {
        path: "/bye",
        element: <Bye />
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
