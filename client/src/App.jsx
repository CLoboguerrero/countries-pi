import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail';
import ActivitiesForm from './components/Activities/ActivitiesForm'
import CountriesList from './components/Activities/CountriesList';
import About from './components/About/About';

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  return (
<>
    <div className='App'>
      {location.pathname !== '/' ? <Nav setCurrentPage={setCurrentPage} /> : null}
      <Routes>
        <Route path= '/' element={<Landing />} />
        <Route path= '/home' element={<Home />} />
        <Route path= '/countries' element={<Cards currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path= '/detail/:id' element={<Detail />} />
        <Route path= '/activities' element={<ActivitiesForm />} />
        <Route path= '/about' element={<About />} />
      </Routes>
    </div>
</>

  );
}

export default App
