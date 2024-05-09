import {NavLink} from "react-router-dom";

const Nav = () => {
  return(
  <>
      <nav className="nav nav-pills nav-justified">
        <div><NavLink to="/">Home</NavLink></div>
        <div><NavLink to="/profile">Profile</NavLink></div>
        <div><NavLink to="/shop">Shop</NavLink></div>
      </nav>
  </>
  )
}

export default Nav;