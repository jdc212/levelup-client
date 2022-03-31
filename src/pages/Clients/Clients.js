import React from "react";
import {
  CubeIcon,
  GlobeIcon,
  GiftIcon,
} from "@heroicons/react/outline";
import { NavBar } from "../../components/NavBar/NavBar";


function Corporate() {
  return (
    <>
    <NavBar />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Read to be rewarded?</span>
            <span className="block text-indigo-600">
              Level Up is the easiest way
            </span>
          </h2>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              For Clients
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your loyalty worth a lot
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <GiftIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Be rewarded
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                Shop at your favorite stores and collect points to redeem for products and services.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <CubeIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Single Platform
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">Have all your points on a single platform, which can be consulted at participating establishments.</dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <GlobeIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    No more paper
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  With one click, the establishment add and compensate your
                  loyalty points. And you no longer have to worry about carrying
                  your loyalty cards.
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
