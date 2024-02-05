import './styles/App.css';
import Navbar from './common/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Learning from './pages/Learning';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learning' element={<Learning />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>



  );
}

export default App;
