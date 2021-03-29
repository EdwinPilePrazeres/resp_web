import React from "react";
// import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SinginPage from "./pages/singin";
// import Navbar from "./components/Navbar";
// import Sidebar from './components/Sidebar';
// import Footer from "./components/Footer";

function App() {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //     setIsOpen(!isOpen)
  // }

  return (
    <Router className="App">
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} /> */}
      <Switch>
        <Route path="/resp_web" component={Home} exact />
        <Route path="/resp_web/signin" component={SinginPage} exact />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
