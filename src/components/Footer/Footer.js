import styles from './Footer.module.css';

export function Footer(){
    return(
    <div className={styles.footer}>
        <img src="/"/>
        <section>
            <h3>Institutional</h3>
            <a href="/">About us</a>
            <a href="/">LevelUp for business</a>
            {/*<a href="/">LevelUp for users</a>*/}           
        </section>
        <section>
            <h3>Restricted Area</h3>
            <a href="/">Business Profile</a>
            {/*<a href="/">User Profile</a>*/}           
        </section>
    </div>
    )
}