import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';



function App() {
  
  return (

    <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path='/reg' element={<Register/>}/>
    </Routes>
    </div>
    </Router>
  );
  
}

export default App;
