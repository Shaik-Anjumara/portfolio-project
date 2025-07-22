import "./App.scss";
import { Routes, Route , useLocation } from 'react-router-dom';
 
 
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skills from './Containers/skills';
import Portfolio from './Containers/portfolio';
import Contact from './Containers/contact';
import Navbar from './Components/navbar';
 

function App() {

  const location = useLocation();
  console.log(location);
  

   return (
    <div className="App">
 
      {/*  navbar  */}
      <Navbar />

      {/* main page content  */}

      <div className="App__main-page-content">
        <Routes>
         <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
       
    </div>
  );
}

export default App;
