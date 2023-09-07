import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Students from "./components/Students";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Manage from "./components/Manage";

function App() {
  return (
  <BrowserRouter>
    <Navigation />
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/students" element={<Students/>} />
        <Route exact path="/manage" element={<Manage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
