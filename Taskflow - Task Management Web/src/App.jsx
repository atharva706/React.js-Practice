
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Dashboard from './Pages/Dashboard'
import MainLayout from './Components/MainLayout.jsx'
import Settings from './Pages/Settings.jsx'
import Tasks from "./Pages/Tasks";
import TaskDetails from './Pages/TaskDetails.jsx'
import { Route , Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>

        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='tasks' element={< Tasks/>} />
          <Route path='tasks/:id' element={<TaskDetails />} />
          <Route path='settings' element={<Settings />} />
        </Route>
        
      </Routes>


    </>
  )
}

export default App
