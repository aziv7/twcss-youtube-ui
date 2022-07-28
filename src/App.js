import { useState } from 'react';
import { LeftSideMenu, Navbar } from './components';
import logo from './logo.svg';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className='flex flex-row'>
      <LeftSideMenu />
      <div className='flex-[7] bg-mainColor'>
        <Navbar />
        <div>video cards</div>
      </div>
    </div>
  );
}

export default App;
