import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
<<<<<<< HEAD
import Verify from './Components/Verify/Verify' 
import Password  from './Components/Password/Password'
=======
>>>>>>> arunalu-origin/main
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /> </div>
  },
  {
    path: '/register',
    element: <div><Register /> </div>
<<<<<<< HEAD
  } ,
  {
    path: '/Verify',
    element: <div><Verify /> </div>
  } ,
  {
    path: '/password',
    element: <div><Password /> </div>
  } 
 
=======
  }
>>>>>>> arunalu-origin/main

])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
