import React from 'react'

type propTypes = {
    buttonText: string;
    isPrimary: boolean;
}

const CommonButton = ({buttonText, isPrimary}: propTypes) => {
  return (
    <>
        {
            isPrimary ? (
                <button className="px-6 py-2 bg-ourRed hover:bg-red-700 text-white text-[0.65rem] leading-5 font-extrabold rounded shadow-md transition-colors">
                        {buttonText}
                </button>
            ) : (
                <button className="px-6 py-2 bg-transparent border border-ourRed text-ourRed hover:text-ourDarkRed hover:border-bg-red-700 hover:border-red-700 text-[0.65rem] leading-5 font-extrabold rounded shadow-md transition-transform">
                    {buttonText}
                </button>
            )
        }
    </>
  )
}

export default CommonButton