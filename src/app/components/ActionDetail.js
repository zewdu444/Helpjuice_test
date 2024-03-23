import React from "react";

function ActionDetail() {
  return (
    <div className="relative overflow-hidden sm:bottom-[8rem]">
      <div className="relative z-10">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="max-w-2xl text-center mx-auto">
            <div className="mt-5  flex flex-row justify-center  ">
              <div className="flex flex-row bg-gradient-to-r from-yellow-100 to-orange-100 sm:pr-4 pr-2 ">
                <h6 className="sm:text-2xl text-sm underline font-bold">
                  Free
                </h6>
                <p className="sm:text-xs  text-[0.6rem] w-[50px] text-left text-gray-600 pl-1">
                  Free Forever
                </p>
              </div>
              <div className="flex flex-row bg-gradient-to-r from-orange-100 to-violet-100 sm:pr-4 pr-2">
                <h6 className="sm:text-2xl text-sm underline font-bold">
                  Unlimited
                </h6>
                <p className="sm:text-xs  text-[0.6rem] w-[50px] text-left text-gray-600 pl-1">
                  Tutorial Creation
                </p>
              </div>
              <div className="flex flex-row bg-gradient-to-r from-violet-100 to-green-200 ">
                <h6 className="sm:text-2xl text-sm underline font-bold">
                  Powerful
                </h6>
                <p className="sm:text-xs  text-[0.6rem] w-[50px] text-left text-gray-600 pl-1">
                  Editor & Integrations
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col justify-center border-4 rounded-xl border-black">
              <div className="mt-5 max-w-2xl self-center">
                <h6 className="block font-semibold text-gray-800 text-2xl md:text-4xl lg:text-4xl dark:text-gray-200 max-w-[450px] ">
                  Create A Detailed Tutorial in Less than 3 clicks
                </h6>
              </div>
              <div className="mt-5 max-w-2xl self-center">
                <button
                  type="button"
                  className="py-4 px-6 inline-flex items-center max-w-[400px] gap-x-2 text-lg font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800"
                >
                  <img src="/chrome.svg" alt="Logo" className=" w-8rem" />
                  Install Wizardshot
                </button>
              </div>

              <div className="mt-5 max-w-2xl self-center">
                <h6 className="block font-semibold text-gray-800 text-xs sm:text-xl dark:text-gray-200 max-w-[450px] ">
                  “Has helped us write help docs 100x faster”
                </h6>
                <p className="block  text-gray-800 text-xs sm:text-xl  dark:text-gray-200 max-w-[450px] ">
                  – Dany River, Cartier Informatie
                </p>
                <img src="/star.svg" alt="rating" className="mx-auto" />
              </div>

              <div className="relative sm:bottom-[20rem] bottom-[18rem] left-[17rem]  sm:left-[36rem] mb-[-8rem]">
                <img src="/detailarrow.svg" alt="Logo" className=" sm:w-10 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionDetail;
