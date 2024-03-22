import React from "react";

function NavBar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white  text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="inline-flex text-xl font-semibold dark:text-white pt-2"
            href="#"
            aria-label="Brand"
          >
            <img src="/logo.svg" alt="Logo" className=" w-4rem" />
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden size-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden size-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block "
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <div className="flex flex-col gap-y-4 pt-2 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-center sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7 sm:ml-auto">
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Features
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                About
              </a>
              <a
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href="#"
              >
                Help Center & Community
              </a>
            </div>
            <div className="flex flex-right sm:flex-row flex-col sm:ml-auto gap-2 ">
              <a
                className="flex  gap-x-2 justify-center  sm:self-center self-start pt-3  font-medium text-gray-500 hover:text-gray-400  sm:border-gray-300   dark:text-gray-400"
                href="#"
              >
                Login
              </a>
              <div className="flex flex-col py-2  border-t border-gray-200 sm:border-none items-center">
                <p className="text-center ">100% free, forever 🤑</p>
                <button
                  type="button"
                  className="py-2 px-4 inline-flex items-center max-w-[200px] gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
                >
                  <img src="/chrome.svg" alt="Logo" className=" w-4rem" />
                  Install Wizardshot
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
