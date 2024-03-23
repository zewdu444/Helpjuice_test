import React from "react";

function Banner() {
  return (
    <div className="mb-10 mt-14 divide-y-4  divide-black ">
      <div className="bg-black  rounded-t-md mx-2">
        <p className="text-right bg-white relative bottom-[1.5rem]">
          100% free, forever 🤑
        </p>
        <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex sm:flex-row flex-col justify-between">
            <div className="flex flex-col text-white max-w-[500px] gap-2 ">
              <h6 className="text-2xl">Create Tutorials in 3 Clicks.</h6>
              <p className="text-sm text-gray-400">
                With WizardShot, You Click Capture, And We’ll Capture What’s
                Happening on Your Screen And Turn It Into A Tutorial.
              </p>
            </div>

            <div className="flex flex-col  self-end sm:self-auto pt-6 sm:pt-0">
              <a
                className="px-4 inline-flex items-center gap-x-2 text-2xl underline bg-black text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
                Try Wizardshot
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Banner;
