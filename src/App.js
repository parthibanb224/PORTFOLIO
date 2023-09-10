import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllProjects from './SubPages/AllProjects';
import MainPage from './pages/MainPageLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' Component={MainPage}></Route>
        <Route path='/projects' Component={AllProjects}></Route>
      </Routes>
    </div>
  );
}

export default App;
