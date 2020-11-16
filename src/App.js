import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './css/style.css'
import './css/dock.css'
import Landing from './components/Landing'
import Experiments from './components/Experiments'
import Menu from './components/Menu'
import Docker from './components/Docker'

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path={"/experiments"}>
          <Experiments />
        </Route>
        <Route path={"/"}>
          <Landing />
        </Route>
      </Switch>
      <Docker />
    </Router>
  );
}




export default App;
