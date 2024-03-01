import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <img
        src={LOGO_URL}
        alt="logo"
        className="logo"
      />
      <div className="nav-links">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
