import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Spiderman from './Components/Spiderman/Spiderman'
import CaptainAmerica from './Components/CaptainAmerica/CaptainAmerica'
import Hulk from './Components/Hulk/Hulk'
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
    
   
    </Routes>
    
    </div>
    
 

    </>
  );
}

export default App;
