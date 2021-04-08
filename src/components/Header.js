import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">
          <header className="header grey darken-2 tc">
            <h1>Kitchen Organizer</h1>
            <div>
              <button className="signup-button">
                <a href="Form/signup.html">Sign up</a>
              </button>
            </div>
            <div className="navbar">
              <NavLink to="/home" activeClassName="active">
                All Items
              </NavLink>
              <NavLink to="/beverage" activeClassName="active">
                Beverage
              </NavLink>

              <NavLink to="/Dry Foods" activeClassName="active">
              Dry Foods
              </NavLink>

              <NavLink to="/fresh-items" activeClassName="active">
              Fresh items
              </NavLink>

              <NavLink to="/protein" activeClassName="active">
              Protein
              </NavLink>

              <NavLink to="/Toiletries" activeClassName="active">
              Toiletries
              </NavLink>

              <NavLink to="/shopping-list" activeClassName="active">
              Shopping List
              </NavLink>

              <a href="./">Toiletries</a>
{/* 
              <a href="./">Dry Foods</a>
              <a href="./">Fresh items</a>
              <a href="./">Animal Protein</a>
              
              < a href="./">shopping-list" </a> */}
             
            </div>
              
            
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
