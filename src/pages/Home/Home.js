import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/styles/LevelUpWhite.png'

import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      {/*imageHero*/}
      <section>
        <div className={styles.sectionhero}>
          <div>
          hu
         <p className={styles.textImageHero}>
            Transform your business into an experience
            </p>
            
          </div>
        </div>
      </section>

      <section className={styles.sectionfaq}>
        <div className={styles.containerfull}>
          <div className={styles.faqtitlebox}>
            <div className={styles.wcontainer}>
              <h2 className={styles.title}>
                Create the most powerful <br></br>fidelity program to your business
              </h2>
            
            <div className={styles.faqbox}>
                <div className={styles.faqitem}>
                  <h3 className={styles.faqitemtrigger}>
                    Data-driven promotions
                  </h3>
                  <p className={styles.faqitemcontentinner}>
                    Sync all your data in real-time to personalize your
                    promotions and boost your performance.
                  </p>
                </div>
                <div className={styles.faqitem}>
                  <h3 className={styles.faqitemtrigger}>One single UI</h3>
                  <p className={styles.faqitemcontentinner}>
                    In the Campaign Manager marketers can create sophisticated
                    promotions without blocking developers.
                  </p>
                </div>
                <div className={styles.faqitem}>
                  <h3 className={styles.faqitemtrigger}>
                    Cloud native and extendable
                  </h3>
                  <p className={styles.faqitemcontentinner}>
                    Talon.One is endlessly scalable. Connect your customer data,
                    integrate with any 3rd parties and optimize on the fly.
                  </p>
                </div>
            </div>

            <Link className={styles.signupbutton} to="/signup">Signup here!</Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
