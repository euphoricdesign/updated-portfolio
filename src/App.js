import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import AboutPage from './pages/AboutPage/AboutPage'
import Projects from './pages/Projects/Projects';
import './App.scss';
import HashLoader from "react-spinners/HashLoader";
import "./light.scss"
import CustomCursor from './components/CustomCursor/CustomCursor';
import Footer from './components/Footer/Footer';

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
            color={"#ae3258;"}
            loading={loading} 
            />
        </div>

        :
        <Router>
          <CustomCursor />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/projects" exact component={Projects}/>
          </Switch>
          <Footer />
        </Router>
      }
      
    </>
  );
}

export default App;

