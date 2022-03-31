import { Link } from "react-router-dom";
import { Popover, Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import Logo from "../../assets/styles/LevelUpOfficialLogo2.png";
import { AuthContext } from "../../contexts/authContext";
import { useState, useContext, useEffect } from "react";
import { Fragment } from "react";
import logo from "../../assets/styles/LogoMakr.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar() {
  const { logout, loggedInUser } = useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (loggedInUser.token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setToggle(false);
  }, [loggedInUser]);

  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img className="h-12 w-auto" src={Logo} alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

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

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {login ? null : (
              <Link
                to="/login"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
            )}

            {login ? null : (
              <Link
                to="/signup"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </Link>
            )}

            {login ? (
              <Menu as="div" className="z-10 ml-3 relative">
                <div>
                  <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={logo} alt="" />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/businessprofileinfo"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/"
                          onClick={() => {
                            logout();
                            setLogin(false);
                            setToggle(false);
                          }}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : null}
          </div>
        </div>
      </div>
    </Popover>
  );
}
