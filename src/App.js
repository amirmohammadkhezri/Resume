import React from 'react';
import './App.css';
import About from './container/about/about';
import Resume from './container/resume/resume';
import Portfolio from './container/Portfolio/portfolio';
import Contact from './container/Contact/contact';
import Singlepost from './container/Singlepost/singlepost';
import Singlepost2 from './container/Singlepost/singlepost2';
import Singlepost3 from './container/Singlepost/singlepost3';
import Wrapper from './hoc/Wrapper';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DarkModeToggle from './components/Theme/DarkModeToggle';
import './components/Theme/styles.scss';

// صفحه اصلی در سیستم ری اکت
function App() {
  return (
    <Wrapper>
      {/* حالت شب و روز */}
      <>
        <div className="navbar">
          <DarkModeToggle />
        </div>
      </>
      {/* پایان حالت شب و روز */}
      {/* مسیر های اصلی سیستم */}
      <Router>
        <Route path="/about" exact component={About} />
        <Route path="/" exact component={Resume} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/singlepost" exact component={Singlepost} />
        <Route path="/singlepost2" exact component={Singlepost2} />
        <Route path="/singlepost3" exact component={Singlepost3} />
      </Router>
      {/* پایان مسیر های اصلی سیستم */}
    </Wrapper>
  );
}

export default App;
