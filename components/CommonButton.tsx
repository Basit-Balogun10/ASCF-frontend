import React from 'react'

type propTypes = {
    bigText?: boolena;
    buttonText: string;
    isPrimary: boolean;
    onClickHandler: () => void;
}

const CommonButton = ({bigText, buttonText, isPrimary, onClickHandler}: propTypes) => {
  return (
    <>
        {
            isPrimary ? (
                <button className={`px-6 py-2 bg-ourRed hover:bg-red-700 text-white ${bigText ? "text-md" : "text-[0.65rem]"} leading-5 font-extrabold rounded shadow-md transition-colors`} onClick={onClickHandler}>
                    {buttonText}
                </button>
            ) : (
                <button className={`px-6 py-2 bg-transparent border border-ourRed text-ourRed hover:text-ourDarkRed hover:border-bg-red-700 hover:border-red-700 ${bigText ? "text-md" : "text-[0.65rem]"} leading-5 font-extrabold rounded shadow-md transition-transform`} onClick={onClickHandler}>
                    {buttonText}
                </button>
            )
        }
    </>
  )
}

export default CommonButton