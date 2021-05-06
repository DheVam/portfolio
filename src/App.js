import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import about from './pages/about';
import Blogs from './pages/blog';
import Skills from './pages/skills';
import Footer from './Components/footer'


function App() {
  return (
    <Router>
      <Navbar/>
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={about}/>
        <Route path='/blog' component={Blogs} />
        <Route path='/skills' component={Skills}/>
     </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
