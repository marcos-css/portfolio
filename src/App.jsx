import './App.scss';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import Context from './context/Context';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div className="App">
        <Context>
      <Routes>
    <Route path="/" element={<Navigate to="/portfolio" replace />} />
    <Route element={<Home/>}  path="/portfolio" />
    <Route element={<Contact/>} path="/portfolio/contact"/>
    <Route element={<Portfolio/>} path="/portfolio/projects"></Route>
  </Routes>
        </Context>
    </div>
  );
}

export default App;
