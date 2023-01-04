import "./StyleSheets/FetchingDataStyleSheet.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="topnav">
      <Link to="/"> Fetching-Data</Link>
      <Link to="/ArraysPractice"> Arrays </Link>
      <Link to="/CrudApp"> CRUD-Page </Link>
      <Link to="/ArrayObjects"> Array-Objects </Link>
      <Link to="/StatesBasic"> States-Basic </Link>
      <Link to="/PropsPractice"> PropsPractice </Link>
      <Link to="/ReactQuery"> ReactQuery</Link>
      <Link to="/FormExample"> FormExample</Link>
      
    </div>
  );
}

export default Navbar;
