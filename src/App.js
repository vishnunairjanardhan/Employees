import './App.css';
import Home from './components/Home';
import {} from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Employees !</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/create">Add Employees</a>
        </li>
      </ul>
    </div>
  </nav>

      <Router>
        <Routes>
          
        <Route path='/' element ={<Home/>} />
        <Route path='/create' element ={<Add/>} />
        <Route path='/edit' element ={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
