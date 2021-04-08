import {
  Route,
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.js";
import Beverage from "./pages/Beverage";
import Login from "./pages/Login";
import DryFood from "./pages/Dryfood";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/beverage" exact component={Beverage} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Home} />
          <Route path="/Dry Foods" exact component={DryFood} />
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
