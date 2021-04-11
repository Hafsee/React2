import {
  Route,
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Beverage from "./pages/Beverage";
import Login from "./pages/Login";
import DryFood from "./pages/Dryfood";
import toiletries from "./pages/toiletries";
import Protein from "./pages/Protein";
import Shopping_list from "./pages/Shopping_list";
import Fresh from "./pages/Fresh";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/beverage" exact component={Beverage} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/Dry Foods" exact component={DryFood} />
          <Route path="/Toiletries" exact component={toiletries} />
          <Route path="/Protein" exact component={Protein} />
          <Route path="./Fresh items" exact component={Fresh}/>
          <Route path="/Shopping List" exact component={Shopping_list} />
          <Route path="/" exact component={Home} />
          
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
