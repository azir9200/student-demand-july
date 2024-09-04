import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" ">
      <ul className="flex items-center space-x-5">
        <li>
          <Link className="bg-blue-400 p-3 " to={"/products"}>
            Products
          </Link>
        </li>

        <li>
          <Link className="bg-blue-400 p-3 " to={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
