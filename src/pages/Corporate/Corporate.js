import React from "react";
import { Link } from "react-router-dom";

import styles from "./Corporate.module.css";

function Corporate() {
  return (
    <div>
      {/*imageHero*/}
      <section>
        <div className={styles.heroimage}>
          <div className={styles.herotext}>
            <h1>WELCOME TO LEVEL UP</h1>
            <p>Level UP is the loyalty program and strategic technology partner empowering retailers to improve their performance and offer their shoppers an unique experience, through reward program solutions, and complementary marketing services.</p>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        
        <div className={styles.subsection2}>
          <div className={styles.topicssection2}>
            <h3>About Us</h3>
            <p>It's the drive to innovate that has brought together the founders of the start-up Two Wonder Women & One Bro. And their first mission is to revolutionize the loyalty and rewards programs landscape and  empower retailers to offer their best to their beloved customers.</p>
          </div>
          <div>
            <h3>Level Up Is Global</h3>
            <p>Two Wonder Women & One Bro's Level Up app is an application developed in Brazil but its ease of use makes it an instant global presence:  geography does not matter when it comes to a tool with a universal appeal.</p>
          </div>  
          <div>
            <h3>Cloud native and expandable</h3>
            <p>Level Up app is endlessly scalable. Connect your customer data, integrate with your own personalized loyalty program, and enjoy and take advantage of new programs added on a monthly basis.</p>
          </div>
        </div>

        <Link to="/signup">
          Join the revolution!
        </Link>
      </section>
    </div>
  );
}

export default Corporate;
