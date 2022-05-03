import { Transition } from "@headlessui/react";
import { createRef, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = createRef();
  return (
    <div>
      <nav className="shadow-sm w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items items-center mx-20 justify-between w-full">
              <Link href="/">
                <div className="flex justify-center items-center flex-shrink-0">
                  <h1 className="font-bold text-xl cursor-pointer">
                    Wall<span className="text-blue-500">Stract</span>
                  </h1>
                </div>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="cursor-pointer text-black  px-3 py-2 text-md font-semibold hover:text-blue-600 no-underline">
                      Home
                    </a>
                  </Link>
                  <Link href="/wallpapers">
                    <a className="cursor-pointer hover:bg-blue-600 text-blue-600  hover:text-white px-3 py-2 rounded-md text-md font-semibold  no-underline">
                      Wallpapers
                    </a>
                  </Link>
                  <Link href="/collections">
                    <a className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white px-3 py-2 rounded-md text-md font-semibold no-underline">
                      Collections
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="cursor-pointer bg-blue-600 text-white hover:bg-black px-3 py-2 rounded-md text-md font-semibold no-underline">
                      About Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden id=mobile-menu">
              <div
                ref={ref}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link href="/">
                  <a className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline">
                    Home
                  </a>
                </Link>
                <Link href="/wallpapers">
                  <a className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline">
                    Wallpapers
                  </a>
                </Link>
                <Link href="/collections">
                  <a className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline">
                    Collections
                  </a>
                </Link>
                <Link href="/about-us">
                  <a className="cursor-pointer hover:bg-blue-600 text-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium no-underline">
                    About Us
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
