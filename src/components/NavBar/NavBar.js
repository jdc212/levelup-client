import { Link } from "react-router-dom";
/*import styles from "./NavBar.module.css";*/


export function NavBar() {
    return (
        <div className="navBar-container">
            <div className="navBar-icons">
                <Link to="/business">
                    <div className="navBar-icon">
                        <span>Business</span>
                    </div>
                </Link>
                <Link to="/clients">
                    <div className="navBar-icon">
                        <span>Clients</span>
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
                <button>
                    <span>Menu</span>
                </button>
            </div>
            <div className="navBar-background">
                <img
                    className="imageHero-menu"
                    
                    alt="navbar-background"
                />
                <button>
                    <span>Discover me</span>
                </button>
            </div>
        </div>

    )
        
};
