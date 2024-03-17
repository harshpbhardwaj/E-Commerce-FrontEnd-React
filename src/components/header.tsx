import { FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const user = { _id: "12", isAdmin: true }
const Header = () => {
    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      // 👇️ toggle isActive state on click
      setIsActive(current => !current);
    };
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Open <span>Shop</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/search"}>Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/cart"}><FaShoppingBag /></Link>
                    </li>

        {
            user?._id? (
                <>
                <li className={isActive ? 'nav-item dropdown show' : 'nav-item dropdown'}>
                    <a className="nav-link dropdown-toggle"  onClick={handleClick} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaUserAlt />
                    </a>
                    <div className={isActive ? 'dropdown-menu show' : 'dropdown-menu hide'} aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to={"/orders"}>My Orders {isActive}</Link>
                        <a className="dropdown-item" href="#"><FaSignOutAlt /></a>
                        { user.isAdmin && (
                            <>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to={"/admin/dashboard"}>Admin</Link>
                            </>
                        )}
                    </div>
                </li>
                </>
            ) : (
                <li className="nav-item">
                    <Link className="nav-link" to={"/login"}><FaSignInAlt /></Link>
                </li>
                )
        }
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control form-control-sm radius-50 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-sm btn-outline-success radius-50 btn-theme my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>



  )
}

export default Header