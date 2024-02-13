import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/basketball.png';
import './navigation.styles.scss';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    const res = await signOutUser();
  };
  return (
    <Fragment>
      <div className="nav">
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>
            <img className="nav-logo" src={logo} alt="Wozzie Logo" />
          </Link>
          <div className="nav-link-list">
            <Link className="nav-link" to='/shop'>
              Shop
            </Link>
            {
              currentUser ?
                <span style={{cursor: "pointer"}} className="nav-link" onClick={signOutHandler}>Sign Out</span>
              :
                <Link className="nav-link" to='/auth'>
                  Sign In
                </Link>
            }
            <CartIcon />
          </div>
          <CartDropdown />
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;