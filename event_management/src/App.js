// import logo from './logo.svg';
import './App.css';
// import Login from './component/Login';
import Photo from './component/Photo';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';

// import Registration from './component/Registation';
import Contact from './component/Contact';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Vediog from './component/Vediog';
import Ideating from './component/Service/Ideating';
import Activating from './component/Service/Activating';
import Artist from './component/Service/Artist';
import Wedding from './component/Service/Wedding';
import Exhibitions from './component/Service/Exhibitions';
import Intellectual from './component/Service/Intellectual';
import Merchanding from './component/Service/Merchanding';
import Birthday from './component/Service/Birthday';
import Events from './component/Service/Events'
import Service from './component/Service/Service';
import Login from './component/Login';
import Registration from './component/Registration';
import { useState } from 'react';

function App() {
  const [dark,setdark]=useState('white')
  return (
    <div className="App">
      <div>a

        <Router>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>  }></Route>
          <Route path='/about' element={<About/>  }></Route>
          <Route path='/login' element={<Login/>  }></Route>
          <Route path='/registration' element={<Registration/>  }></Route>
            <Route path='/contact' element={<Contact/>  }></Route>
            <Route path='/service' element={<Service/>  }></Route>
            <Route path='/photo' element={<Photo/>  }></Route>
            <Route path='/event' element={<Events/>  }></Route>
            <Route path='/vedio' element={<Vediog/>  }></Route>
            <Route path='/idea' element={  <Ideating/> }></Route>
            <Route path='/artist' element={  <Artist/> }></Route>
            <Route path='/wedding' element={  <Wedding/> }></Route>
            <Route path='/activation' element={  <Activating/> }></Route>
            <Route path='/exhinitions' element={  <Exhibitions/> }></Route>
            <Route path='/intellectual' element={  <Intellectual/> }></Route>
            <Route path='/merchanding' element={  < Merchanding/> }></Route>
            <Route path='/birthday' element={  <Birthday/> }></Route>
            
           
  

            {/* <Route path='' element={ }></Route>
            <Route path='' element={ }></Route> */}
          </Routes>
        </Router>
      </div>
     
      <div>
        <Footer />
      </div>


    </div>
  );
}

export default App;
