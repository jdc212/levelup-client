// import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
      
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Join the loyalty revolution</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md">
              <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block text-indigo-600 text-3xl">Level Up</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <Link
                    to="/"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Business
                  </Link>
                  <Link
                    to="/clients"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Clients
                  </Link>
                  <Link
                    to="/corporate"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Corporate
                  </Link>
          </div>
          <div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between ">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://https://leveluployalty.netlify.app/" class="hover:underline">LevelUp™</a>. All Rights Reserved.
            </span>
          </div>
        

         
        </div>
      </div>
  
  );
}


// <div className={styles.sectionfooter}>
    //   <div className={styles.containerfull}>
    //     <div className={styles.wcontainer}>
    //       <div className={styles.footerwrapper}>
    //         <div className={styles.footerleft}>
    //           <h1 className={styles.footertitle}>
    //             Join the loyalty revolution
    //           </h1>

    //           <div className={styles.footerlink}>
    //             <div className={styles.titlesubtext}>
    //               <a className={styles.adjustext} href="/business">
    //                 Business
    //               </a>
    //               <a className={styles.adjustext} href="/clients">
    //                 Clients
    //               </a>
    //               <a className={styles.adjustext} href="/business">
    //                 Corporate
    //               </a>
    //               <a className={styles.adjustext} href="/signup">
    //                 Signup
    //               </a>
    //             </div>
    //           </div>
    //           </div>
    //           <div className={styles.footerright}>
    //             <div className={styles.footerimg1}>
    //             <h4 className={styles.teste}>
    //             Level Up 
    //             </h4>
    //             </div>
    //           </div>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>