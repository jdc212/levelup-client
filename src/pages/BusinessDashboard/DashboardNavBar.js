import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, BellIcon } from "@heroicons/react/outline";
import {  Link } from "react-router-dom";
import logo from "../../assets/styles/LogoMakr.png";
import { Popover } from "@headlessui/react";
import Logo from "../../assets/styles/LevelUpOfficialLogo2.png";
import { HashLink } from 'react-router-hash-link';
import { AuthContext } from "../../contexts/authContext";
import { useState, useContext, useEffect } from "react";

const navigation = [
  { name: "Dashboard", page: "/businessDashboard", current: true },
  { name: "Profile", page: "/businessprofileinfo", current: false },
  { name: "Compensation Rules", page: "/compensation", current: false },
];

const navigation2 = [
  { name: "Create Promotion", page: "/Businessdashboard#createPromotion", current: false },
  { name: "Registered Promotions", page: "/BusinessDashboard#promotions", current: false },
  { name: "Create Customer Points", page: "/Businessdashboard#createPoints", current: false },
  { name: "Search Customer Profile", page: "/Businessdashboard#search", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardNavBar() {
  const { logout, loggedInUser } = useContext(AuthContext);
  const [login, setLogin] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (loggedInUser.user.id) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    setToggle(false);
  }, [loggedInUser]);

  return (
    <Popover>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-12 w-auto"
                  src={Logo}
                  alt=""
                />
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
          </div>
        </div>
      </Popover>
      <Disclosure as="nav" className="bg-gray-800 pb-2 pt-3 rounded-md">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 rounded">
              <div className="relative flex items-center justify-between h-16 rounded">
                <div className="absolute inset-y-0 left-0 flex items-center rounded">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start px-20">
                  <div className="flex-shrink-0 flex items-center"></div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.page}
                          className={classNames(
                            item.current
                              ? " font-extrabold border border-indigo-600 text-white"
                              : "text-white font-extrabold hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={logo}
                          alt=""
                        />
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
                </div>
              </div>
            </div>

            <Disclosure.Panel className="">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation2.map((item, id) => (
                  <HashLink
                    key={item.name}
                    as="a"
                    to={item.page}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </HashLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Popover>
  );
}
