import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/Nav';

function App() {
 
  return (
    <div className="app">
      <NavBar/>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact/:title" element={<Contact/>} />
       <Route path="*" element={<NotFound/>} />
  </Routes>
  </div>
  );
}

export default App
