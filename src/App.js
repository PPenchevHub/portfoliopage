import './App.scss';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import {Switch, Route} from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';



function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar/>
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
