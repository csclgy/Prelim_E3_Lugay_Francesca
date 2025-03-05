import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import NavBar from './NavBar';

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
          <div className='container mt-3'>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Profile" element={<Profile />} />
                  <Route path="/Settings" element={<Settings />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
};

export default App;
