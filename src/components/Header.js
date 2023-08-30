import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-white py-1 px-2 drop-shadow-xl sticky top-0 ">
      <div className="flex justify-between">
        <img className="w-24 bg-black" src={LOGO_URL} alt="logo" />
        <ul className="flex ">
          <Link to="/" className="p-4 no-underline text-dark cursor-pointer">
            Home
          </Link>
          <Link
            to="/about"
            className="p-4 no-underline text-dark cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="p-4 no-underline text-dark cursor-pointer"
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
