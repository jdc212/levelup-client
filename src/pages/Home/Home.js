import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      {/*imageHero*/}
      <section>
        <div className={styles.heroimage}>
          <div className={styles.herotext}>
            <h1>Improve customer retention and trust</h1>
            <p>Reward your customers with personalized incentives and experiences that best reflect their interactions with your brand.</p>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <h1>Create the most powerful fidelity program to your business</h1>
        <div className={styles.subsection2}>
          <div className={styles.topicssection2}>
            <h3>Data-driven promotions</h3>
            <p>Sync all your data in real-time to personalize your promotions and boost your performance.</p>
          </div>
          <div>
            <h3>One single UI</h3>
            <p>In the Campaign Manager marketers can create sophisticated promotions without blocking developers.</p>
          </div>  
          <div>
            <h3>Cloud native and extendable</h3>
            <p>Talon.One is endlessly scalable. Connect your customer data, integrate with any 3rd parties and optimize on the fly.</p>
          </div>
        </div>

        <Link to="/signup">
          Signup here!
        </Link>
      </section>
    </div>
  );
}

export default Home;
