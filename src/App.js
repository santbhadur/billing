import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import AddIteam from './pages/AddIteam';



function App() {
  return (
    <div>
     <Navbars />
    <Routes>
      <Route path='/' element={<h1>Home</h1>}></Route>
      <Route path='/AddIteam' element={ < AddIteam />} />
    </Routes>
    </div>
  )
}

export default App;
