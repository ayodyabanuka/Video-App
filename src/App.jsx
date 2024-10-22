import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/home';
import JoinCall from './routes/join-call';
import VideoCall from './routes/video-call';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join-call' element={<JoinCall />} />
        <Route path='/video-call' element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default App;
