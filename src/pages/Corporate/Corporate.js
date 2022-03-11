import React from "react";
import { Link } from "react-router-dom";

import styles from "./Corporate.module.css";

function Corporate() {
  return (
    <div>
      {/*imageHero*/}
      <section>
        <div className={styles.sectionhero}>
          <div>
            <h1>Welcome to Level Up</h1>
            <p className={styles.textImageHero}>
            Level Up is a loyalty program provider and a strategic technology partner that empowers <br></br>
            retailers to improve their performance and offer their shoppers an unique experience, <br></br>
            through reward program solutions, and complementary marketing services.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionfaq}>
        <div className={styles.containerfull}>
          <div className={styles.faqtitlebox}>
            <div className={styles.wcontainer}>
              <h2 className={styles.title}>
              About Us <br></br>fidelity program to your business
              </h2>
            
            <div className={styles.faqbox}>
                <div className={styles.faqitem}>
                  <h3 className={styles.faqitemtrigger}>
                  About Us
                  </h3>
                  <p className={styles.faqitemcontentinner}>
                    It's the drive to innovate that has brought together the founders of the start-up Two Wonder Women & One Bro. And their first mission is to revolutionize the loyalty and rewards programs landscape and  empower retailers to offer their best to their beloved customers.
                  </p>
                </div>
                <div className={styles.faqitem}>
                  <h3 className={styles.faqitemtrigger}>Level Up Is Global</h3>
                  <p className={styles.faqitemcontentinner}>
                  Two Wonder Women & One Bro's Level Up app is an application developed in Brazil but its ease of use makes it an instant global presence:  geography does not matter when it comes to a tool with a universal appeal.
                  </p>
                </div>
                <div className={styles.faqitem}>
                  <h3 className={styles.faqitemtrigger}>
                  Cloud native and expandable
                  </h3>
                  <p className={styles.faqitemcontentinner}>
                  Level Up app is endlessly scalable. Connect your customer data, integrate with your own personalized loyalty program, and enjoy and take advantage of new programs added on a monthly basis.
                  </p>
                </div>
            </div>

            <Link className={styles.signupbutton} to="/signup">Join the revolution!</Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Corporate;

