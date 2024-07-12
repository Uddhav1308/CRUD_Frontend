import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<User/>} ></Route>
          <Route path='/add' element={<Add/>} ></Route>
          <Route path='/edit/:id' element={<Edit/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
