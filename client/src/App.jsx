import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail';
import Activities from './components/Activities/Activities'
import About from './components/About/About';

function App() {

  return (
<>
    <div className='App'>
      <Nav />
      <Routes>
        <Route path= '/' element={<Landing />} />
        <Route path= '/home' element={<Home />} />
        <Route path= '/countries' element={<Cards />} />
        <Route path= '/detail/:id' element={<Detail />} />
        <Route path= '/activities' element={<Activities />} />
        <Route path= '/about' element={<About />} />
      </Routes>
    </div>
</>

  );
}

export default App
