import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.sectionfooter}>
      <div className={styles.containerfull}>
        <div className={styles.wcontainer}>
          <div className={styles.footerwrapper}>
            <div className={styles.footerleft}>
              <h1 className={styles.footertitle}>
                Join the loyalty revolution
              </h1>

              <div className={styles.footerlink}>
                <div className={styles.titlesubtext}>
                  <a className={styles.adjustext} href="/business">
                    Business
                  </a>
                  <a className={styles.adjustext} href="/clients">
                    Clients
                  </a>
                  <a className={styles.adjustext} href="/business">
                    Corporate
                  </a>
                  <a className={styles.adjustext} href="/signup">
                    Signup
                  </a>
                </div>
              </div>
              </div>
              <div className={styles.footerright}>
                <div className={styles.footerimg1}>
                <h4 className={styles.teste}>
                Level Up 
                </h4>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
