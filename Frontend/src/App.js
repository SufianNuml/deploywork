
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SingUp from './components/SingUp';
import Login from './components/Login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
       <Routes>
       <Route path='/' element={<SingUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
         </Routes>
      
      </BrowserRouter>
     
 
    </div>
  );
}

export default App;
