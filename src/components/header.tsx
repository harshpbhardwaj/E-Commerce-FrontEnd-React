import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = {_id:"uioi", isAdmin:true}
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="header">
        <Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link>
        <Link to={"/search"} onClick={() => setIsOpen(false)}><FaSearch /></Link>
        <Link to={"/cart"} onClick={() => setIsOpen(false)}><FaShoppingBag /></Link>

        {
            user?._id? (
                <>
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    <FaUserAlt />
                </button>
                <dialog open={isOpen}>
                    <div>
                        { user.isAdmin && (
                            <Link to={"/admin/dashboard"}>Admin</Link>
                        )}
                        <Link to={"/admin/orders"}>My Orders</Link>
                        <button>
                            <FaSignOutAlt />
                        </button>
                    </div>
                </dialog>
                </>
            ) : <Link to={"/login"}><FaSignInAlt /></Link>
        }


    </nav>
  )
}

export default Header