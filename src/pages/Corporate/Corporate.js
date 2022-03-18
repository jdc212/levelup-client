import React from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar/NavBar";
import {
  AnnotationIcon,
  GlobeAltIcon,
  CloudIcon,
} from "@heroicons/react/outline";

function Corporate() {
  return (
    <>
    <NavBar />
    <div className="bg-gray-50">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">Welcome to Level Up</span>
        <span className="block text-indigo-600">An unique experience</span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <Link to="/signup"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Join the revolution!
          </Link>
        </div>
      </div>
    </div>
  </div>

  <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              About us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Fidelity program to your business
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <AnnotationIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    About us
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  It's the drive to innovate that has brought together the founders of the start-up Two Wonder Women & One Bro. And their first mission is to revolutionize the loyalty and rewards programs landscape and  empower retailers to offer their best to their beloved customers.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Level Up Is Global
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Two Wonder Women & One Bro's Level Up app is an application developed in Brazil but its ease of use makes it an instant global presence:  geography does not matter when it comes to a tool with a universal appeal.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <CloudIcon  className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Cloud native and extendable
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Level Up app is endlessly scalable. Connect your customer data, integrate with your own personalized loyalty program, and enjoy and take advantage of new programs added on a monthly basis.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>      
      </>
  );
}

export default Corporate;
