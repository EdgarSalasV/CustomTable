import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <ul>
        <li>
          <Link to={"products"}>Products</Link>
        </li>
        <li><Link to={"x"}>AnyWhere</Link></li>
      </ul>
    </div>
  );
};

export default Header;
