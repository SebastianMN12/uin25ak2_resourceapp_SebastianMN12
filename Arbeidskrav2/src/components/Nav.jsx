import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/html" activeclassname="active">HTML</NavLink>
      <NavLink to="/css" activeclassname="active">CSS</NavLink>
      <NavLink to="/javascript" activeclassname="active">JavaScript</NavLink>
      <NavLink to="/react" activeclassname="active">React</NavLink>
      <NavLink to="/sanity-and-headless-cms" activeclassname="active">Sanity and headless CMS</NavLink>
    </nav>
  );
};

export default Nav;
