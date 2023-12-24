import "./Header.css";
import sunMoonIcon from "./assets/sun-moon.svg";
import downArrow from "./assets/noun-dropdown-1542639.svg";
import menu from "./assets/noun-toggle-menu-234402.svg";

function Header() {
  return (
    <div id="header_container">
      <div id="button_container">
        <button id="display">
          <img id="menu" src={menu} />
          <span id='text'>Display</span>
          <img id="down_arrow" src={downArrow} />
        </button>
      </div>
      <button id="toggle_theme">
        <img src={sunMoonIcon} alt="toggle_dark_mode" />
      </button>
    </div>
  );
}

export default Header;
