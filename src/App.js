import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Love from './components/love/Love'
import Job from './components/job/Job'
import Luck from './components/luck/Luck'
import bgVideo from './assets/video/bg.mp4'
import audio from './assets/audio/audio.mp3'
import JobModal from './components/job/JobModal';
import LoveModal from './components/love/LoveModal';
import LuckModal from './components/luck/LuckModal';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';

function App() {
  const headerNav = [
    {
      display: 'Tình yêu',
      path: '/Love',
      subPath: '/LoveModal'
    },
    {
      display: 'Công việc',
      path: '/Job',
      subPath: '/JobModal'
    },
    {
      display: 'Tài vận',
      path: '/Luck',
      subPath: '/LuckModal'
    },
  ];

  const { pathname } = useLocation();
  const active = headerNav.findIndex(e => e.path === pathname || e.subPath === pathname);
  return (
    <div id="app">
      {
        pathname != '/' ?
          <ul className="navbar">
            {
              headerNav.map((item, index) => (
                <li key={index} className={active == index ? 'active' : ''}>
                  <Link to={item.path}>{item.display}</Link>
                </li>
              ))
            }
          </ul>
          : ''
      }

      <video src={bgVideo} autoPlay loop muted />
      <audio autoPlay loop>
        <source src={audio} type="audio/ogg" />
      </audio>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Love' element={<Love />} />
        <Route path='LoveModal' element={<LoveModal />} />
        <Route path='/Job' element={<Job />} />
        <Route path='JobModal' element={<JobModal />} />
        <Route path='/Luck' element={<Luck />} />
        <Route path='LuckModal' element={<LuckModal />} />
      </Routes>
    </div>
  );
}

export default App;
