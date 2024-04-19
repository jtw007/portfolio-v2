import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

// components/pages import
import NavBar from './components/NavBar'
import Home from './components/sections/Home'
import ProjectDetails from './components/sections/ProjectDetails'

function App() {

  return (
      <div className='App'>
        <Router>
          {/* <NavBar /> */}
          <div className='routes'>
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/:slug' element={ <ProjectDetails /> } />
            </Routes>
          </div>
        </Router>
      </div>
  )
}

export default App
