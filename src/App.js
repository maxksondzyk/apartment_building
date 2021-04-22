import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import "jquery"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/app.styles.css"

import Navbar from "./components/navbar.component"
import Contacts from "./components/contacts.component";
import About from "./components/about.component";
import BuildingLocation from "./components/location.component";
import ConstructionProgress from "./components/construction-progress.component";
import Footer from "./components/footer.component";
import Plan from "./components/plan.component";
import Apartment from "./components/apartment.component";
import Building from "./components/building.component";

function App() {
  return (
      <div className="main-window">
          <div className={"content"}>
            <Router>
                <Navbar />
                <br/>
                <Route path="/" />
                <Route path="/apartments" exact component={Plan} />
                <Route path="/apartment" exact component={Apartment} />
                <Route path="/contacts" exact component={Contacts} />
                <Route path="/about" exact component={About} />
                <Route path="/location" exact component={BuildingLocation} />
                <Route path="/construction-progress" exact component={ConstructionProgress} />
                <Route path="/building" exact component={Building} />
            </Router>
          </div>
          <div className={"footer-content"}>
            <Footer />
          </div>
      </div>

  );
}

export default App;
