import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import RightSidebar from './components/rightSidebar/RightSidebar';
import Login from './pages/login/Login';

function App() {
  

  return (
    <>

  
      <BrowserRouter>
      <LeftSidebar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          </Routes>
      <RightSidebar/>
  </BrowserRouter>
    </>
  );
}

export default App
