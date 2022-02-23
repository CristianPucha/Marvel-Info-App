import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Spiderman from './Components/Spiderman/Spiderman'
import CaptainAmerica from './Components/CaptainAmerica/CaptainAmerica'
import Hulk from './Components/Hulk/Hulk'
import IronMan from './Components/IronMan/IronMan'
import Thor from './Components/Thor/Thor'
import DoctorStrange from './Components/DoctorStrange/DoctorStrange'
import BlackPanther from './Components/BlackPanther/BlackPanther'
import BlackWidow from './Components/BlackWidow/BlackWidow'
import HawkEye from './Components/HawkEye/HawkEye'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>


   

    <div style={{ overflow: "hidden" }}>
    <Navbar/>
    <Routes>
    
    <Route path="/" element={<Main/>}  />
        <Route path='spider-man' element={<Spiderman />} />
        <Route path='captain-america' element={<CaptainAmerica />} />
        <Route path='hulk' element={<Hulk />} />
        <Route path='iron-man' element={<IronMan />} />
        <Route path='thor' element={<Thor />} />
        <Route path='doctor-strange' element={<DoctorStrange />} />
        <Route path='black-panther' element={<BlackPanther />} />
        <Route path='black-widow' element={<BlackWidow />} />
        <Route path='hawk-eye' element={<HawkEye />} />
    
   
    </Routes>
    
    </div>
    
 

    </>
  );
}

export default App;
