  import {Link} from "react-router-dom";

  const Nav = () => {
    return(
    <>
    <header>
        <nav className="nav nav-pills nav-justified">
          <div><Link className="nav-link active" aria-current="page" to="/">Home</Link></div>
          {" "}
          <div><Link className="nav-link active" aria-current="page" to="/">Profile</Link></div>
          {" "}
          <div><Link className="nav-link active" aria-current="page" to= "/shop">Shop</Link> </div>
        </nav>
    </header>
    </>
    )
  }

  export default Nav;
 