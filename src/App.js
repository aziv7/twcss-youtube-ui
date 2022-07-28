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
      <LeftSideMenu />
      <div className='flex-[7] bg-mainColor'>
        <Navbar />
        <div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={Home} />
              <Route path='/video/:id' element={Video} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
