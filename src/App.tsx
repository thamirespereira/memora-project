import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LeftSidebar from './components/leftSidebar/LeftSidebar';
import Home from './pages/home/Home';
import RightSidebar from './components/rightSidebar/RightSidebar';

function App() {
  

  return (
    <>

    <Home/>
    <LeftSidebar/>
    <RightSidebar/>
      {/*<BrowserRouter>
          <LeftSidebar/>
          <Routes>
          <Route path="/home" element={<Home />} />
          </Routes>
  </BrowserRouter>*/}
    </>
  );
}

export default App
