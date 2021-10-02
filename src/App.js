// import logo from './logo.svg';
import './App.css';

import Navbar from './navbar';
import Submenu from './submenu';
import HeroSection from './hero';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Submenu/>
      <HeroSection/>
    </div>
  );
}

export default App;
