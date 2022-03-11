import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar() {
    return (
        <div className={styles.topbar}>
            <div >
                <div className={styles.firstline}>
                <div className={styles.pages}>
                    <Link to="/" className={styles.linkto}>
                        <div className="navBar-icon">
                            <span className={styles.textnavbar}>Business</span>
                        </div>
                    </Link>
                    <Link to="/clients" className={styles.linkto}>
                        <div className="navBar-icon">
                            <span className={styles.textnavbar}>Clients</span>
                        </div>
                    </Link>
                    <Link to="/corporate" className={styles.linkto}>
                        <div className="navBar-icon">
                            <span className={styles.textnavbar}>Corporate</span>
                        </div>
                        
                    </Link>
                </div>
                <div className={styles.login}>
                    <Link to="/login" className={styles.linkto}>
                        <div className="navBar-icon">
                            <span className={styles.textnavbar}>Login</span>
                        </div>
                    </Link>
                </div>

                </div>
            </div>
        </div>
    )
        
};
