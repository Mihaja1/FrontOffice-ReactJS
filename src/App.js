import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Liste from './components/Liste'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Liste/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;