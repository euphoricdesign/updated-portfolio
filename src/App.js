import React, {useState, useEffect} from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HashLoader from "react-spinners/HashLoader";

import CustomCursor from './components/CustomCursor/CustomCursor';
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import AboutPage from './pages/AboutPage/AboutPage'
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

import './App.scss';
import "./light.scss";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2800)
  }, [])

  return (
    <>
      {
        loading ?
        <div className="loader">
          <HashLoader 
            size={80} 
            color={"#F4ACB7;"}
            loading={loading} 
            />
        </div>

        :
        <Router>
          <CustomCursor />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Router>
      }
      
    </>
  );
}

export default App;

