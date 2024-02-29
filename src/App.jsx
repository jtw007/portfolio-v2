import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

// components/pages import
import NavBar from './components/NavBar'
import Home from './components/sections/Home'

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='routes'>
          <Routes>
            <Route path='/' element={ <Home /> } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
