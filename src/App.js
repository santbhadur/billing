import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Home from './pages/Home';
import AddIteam from './pages/AddIteam';
import LeftContainer from './components/LeftContainer';
import ContactDetails from './pages/contactDetails';
import Business from './pages/business'; 
import LogoSignature from './pages/logoSignature';
import Teams from './pages/Teams';



function App() {
  return (
    <div>
      <Navbars />
      <div style={{ display: 'flex',  }}>
        {/* Sidebar */}
        <LeftContainer />

        {/* Main Content */}
        <div style={{ padding: '20px', flex: 1 }}>
          <Routes>
            <Route path='/' element={ <Home  />} />
            <Route path='/AddIteam' element={<AddIteam />} />
            <Route path='/contactDetails' element={<ContactDetails />} />
            <Route path='/Business' element={<Business />} />
            <Route path='/LogoSignature' element={<LogoSignature />} />
            <Route path='/Teams' element={<Teams />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
