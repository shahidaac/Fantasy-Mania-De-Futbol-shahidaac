import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import EachLeague from './Components/EachLeague/EachLeague';
import NotFoundError from "./Components/NotFoundError/NotFoundError";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route to path="/LeagueInfo/:eachId">
           <EachLeague />
          </Route>
          <Route path="*">
            <NotFoundError />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
