import "./App.css";
import MainBody from "./components/MainBody";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import WorkHistory from "./components/WorkHistory";
import HeadPlate from "./components/HeadPlate";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import SkillSet from "./components/SkillSet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/#top" component={HeadPlate} />
        <Route path="/#profile" component={Profile} />
        <Route path="/#workhistory" component={WorkHistory} />
        <Route path="/#skillset" component={SkillSet} />
        <Route path="/#projects" component={Projects} />
        <Route path="/#contact" component={Contact} />
      </Switch>
      <div className="App">
        <MainBody />
      </div>
    </Router>
  );
}

export default App;
