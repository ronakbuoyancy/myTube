import './App.css';
import VideoScreen from './components/VideoScreen.js/VideoScreen';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<VideoScreen />} />
      </Routes>
    </div>
  );
}

export default App;
