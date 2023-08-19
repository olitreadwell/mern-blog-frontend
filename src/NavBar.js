import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* <a href="/">Home</a> */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* <a href="/about">About</a> */}
        </li>
        <li>
          <Link to="/articles">Articles</Link>
          {/* <a href="/articles-list">Articles</a> */}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
