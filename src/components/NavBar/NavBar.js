import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";


function NavBar() {
    return (
        <div className="navBar-container">
            <div className="navBar-icons">
                <Link to="/clients">
                    <div className="navBar-icon">
                        <span>Clients</span>
                    </div>
                </Link>
                <Link to="/business">
                    <div className="navBar-icon">
                        <span>Business</span>
                    </div>
                </Link>
                <Link to="/corporate">
                    <div className="navBar-icon">
                        <span>Corporate</span>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="navBar-icon">
                        <span>Login</span>
                    </div>
                </Link>
            </div>
            <div className="navBar-menu">
                <buttom>
                    <span>Menu</span>
                </buttom>
            </div>
            <div className="navBar-background">
                <img
                    className="imageHero-menu"
                    src={navbarBackground}
                    alt="navbar-background"
                />
                <buttom>
                    <span>Discover More</span>
                </buttom>
            </div>
        </div>

    )
        
};

export default NavBar; 