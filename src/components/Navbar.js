import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

// Import Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import specific icons

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          {/* Use FontAwesomeIcon component */}
          <FontAwesomeIcon
            icon={this.state.clicked ? faTimes : faBars} // Pass icon object
          />
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {/* Use FontAwesomeIcon component for menu items */}
                  {item.icon && <FontAwesomeIcon icon={item.icon} />}
                  {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
