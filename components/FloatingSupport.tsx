import React, { useState } from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import CommonButton from "../components/CommonButton"

const FloatingSupport = () => {
    const [supportModalOpened, setSupportModalOpened] = useState<boolean>(false);

  return (
      <div className="hidden md:block fixed justify-center items-center bottom-5 right-8 z-50">
          {supportModalOpened ? (
              <div className="relative bg-white dark:bg-ourBlack p-6 space-y-3 shadow-md rounded-md">
                  <div
                      onClick={() => setSupportModalOpened(false)}
                      className="absolute right-2 top-1 p-1 hover:bg-gray-200 dark:hover:bg-gray-100/20 cursor-pointer hover:rounded-full transition-all"
                  >
                      <AiOutlineClose />
                  </div>
                  <p className="text-sm">
                      Kindly select how you intend to support our cause
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                      <CommonButton
                          buttonText="BECOME A SPONSOR"
                          isPrimary={true}
                      />
                      <CommonButton
                          buttonText="ONE-OFF DONATION"
                          isPrimary={false}
                      />
                  </div>
              </div>
          ) : (
              <button
                  onClick={() => setSupportModalOpened(true)}
                  className="w-14 h-14 p-2 border-none outline-none bg-ourRed text-white dark:text-ourBlack hover:bg-ourDarkRed rounded-full"
              >
                  <FaHandHoldingHeart className="mx-auto text-3xl" />
              </button>
          )}
      </div>
  );
}

export default FloatingSupport