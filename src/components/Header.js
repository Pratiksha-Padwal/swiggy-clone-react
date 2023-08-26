import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="bg-white py-1 px-2 drop-shadow-xl sticky top-0 ">
      <div className="flex justify-between">
        <img className="w-24 bg-black" src={LOGO_URL} alt="logo" />
        <ul className="flex cursor-pointer">
          <li className="p-4">Home</li>
          <li className="p-4">About Us</li>
          <li className="p-4">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
