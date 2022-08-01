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
import Footer from './components/Footer/Footer';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(window)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2800)
  }, [])

  const sizeLoader = window.innerWidth < 1920 ? 80 : 150

  return (
    <>
      {
        loading ?
        <div className="loader">
          <HashLoader 
            size={sizeLoader} 
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
          <Footer />
        </Router>
      }
      
    </>
  );
}

export default App;

