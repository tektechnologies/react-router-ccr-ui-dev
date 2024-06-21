import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import Teams from './Teams';
  import Players from './Players';


export default function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/players' element={<Players />}/>
        <Route path='/teams' element={<Teams />}/>
      </Routes>
    </Router>
  )
}