import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">
        <h2>Home</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
