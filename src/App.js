import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ApartmentsList from "./components/apartments-list.component";
import Plan from "./components/plan.component";
import Contacts from "./components/contacts.component";
import About from "./components/about.component";
import BuildingLocation from "./components/location.component";
import ConstructionProgress from "./components/construction-progress.component";

function App() {
  return (
      <Router>
          <div className="container">
              <Navbar />
              <br/>
              <Route path="/" exact component={ApartmentsList} />
              <Route path="/contacts" exact component={Contacts} />
              <Route path="/about" exact component={About} />
              <Route path="/location" exact component={BuildingLocation} />
              <Route path="/construction-progress" exact component={ConstructionProgress} />
              <Plan/>
          </div>
      </Router>
  );
}

export default App;
