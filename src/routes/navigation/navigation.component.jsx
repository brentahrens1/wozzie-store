import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from '../../assets/basketball.png';
import './navigation.styles.scss';

const Navigation = () => {
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
            <Link className="nav-link" to='/auth'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;