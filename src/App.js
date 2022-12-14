import './App.css';
import Home from './components/Home.js/Home';
import { Routes, Route } from 'react-router-dom'
import VideoScreen from './components/VideoScreen/VideoScreen';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Channel from './components/Channel/Channel';
import Shorts from './components/Shorts/Shorts';
import Subscriptions from './components/Music/Music';
import Library from './components/Library/Library';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/videoscreen' element={<VideoScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/channel' element={<Channel />} />
        <Route path='/shorts' element={<Shorts />} />
        <Route path='/music' element={<Subscriptions />} />
        <Route path='/library' element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
