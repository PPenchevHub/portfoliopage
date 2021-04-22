import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {Switch, Route} from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';



function App() {
  const [navToggle, setNavToggle] = useState(false)
const navClick=()=>{
  setNavToggle(!navToggle);
}
  return (
    <div className="App">
 <div className={`sidebar ${navToggle ?'nav-toggle' : ''}`}>
        <Navbar/>
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
        </div>
      <div className="main-content">
        <div className="content">

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>

        </div>
      </div>
    </div>
  );
}

export default App;
