import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/app.styles.css"

import Navbar from "./components/navbar.component"
import About from "./components/about.component";
import BuildingLocation from "./components/location.component";
import ConstructionProgress from "./components/construction-progress.component";
import Footer from "./components/footer.component";
import Plan from "./components/plan.component";
import Unit from "./components/unit.component";
import Building from "./components/building.component";
import UnitsList from "./components/units-list.component";
import Home from "./components/home.component";

function App() {
  return (
      <div className="main-window">
          <div className={"content"}>
            <Router>
                <Navbar />
                <br/>
                <Route path="/" exact component = {Building}/>
                <Route path="/units" exact component={Plan} />
                <Route path="/unit" exact component={Unit} />
                <Route path="/building" exact component={Building} />
                <Route path="/units-list" exact component={UnitsList} />
                <Route path="/home" exact component={Home} />
            </Router>
          </div>
          <div className={"footer-content"}>
            <Footer />
          </div>
      </div>

  );
}

export default App;
