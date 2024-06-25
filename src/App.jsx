import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

// import './index.css'
// components/pages import
import Home from './components/sections/Home'
import ProjectDetails from './components/sections/ProjectDetails'

function App() {

  return (
      <div className='App'>
        <Router>
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
