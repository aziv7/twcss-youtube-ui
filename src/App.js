import { useState } from 'react';
import { LeftSideMenu, Navbar } from './components';
import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className='flex flex-row'>
      <BrowserRouter>
        {' '}
        <LeftSideMenu />
        <div className='flex-[7] flex-col bg-mainColor'>
          <Navbar />
          <div>
            <Routes>
              {' '}
              <Route path='/video/:id' element={<Video />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
