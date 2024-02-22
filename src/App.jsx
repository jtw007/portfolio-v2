import {
  Routes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom'

// components/pages import
import NavBar from './components/NavBar'

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar />

      </div>
    </Router>
  )
}

export default App
