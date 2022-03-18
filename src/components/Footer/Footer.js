import { Link } from "react-router-dom";
import Logo from "../../assets/styles/logo-v1.png"

export function Footer() {
  return (
      
      <div className="bg-white-50">
        <div className="max-w-7xl border-t-2 border-gray-100 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Join the loyalty revolution</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md">
              <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <img className="h-16" src={Logo} alt=""/>
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
          </div>
          <div className="m-0 px-0 bg-white-50">
          <div className="py-6 px-8 md:flex md:items-center md:justify-between ">
            <span className="px-24 text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://https://leveluployalty.netlify.app/" class="hover:underline">LevelUp™</a>. All Rights Reserved.
            </span>
          </div>
          </div>

         

      </div>
  
  );
}


