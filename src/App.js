import './App.css';
import Home from './components/Home.js/Home';
import { Routes, Route } from 'react-router-dom'
import VideoScreen from './components/VideoScreen/VideoScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/videoscreen' element={<VideoScreen />} />
      </Routes>
    </div>
  );
}

export default App;
