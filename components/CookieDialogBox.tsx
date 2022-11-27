import React, { useState } from 'react'

import CommonButton from "../components/CommonButton";

const CookieDialogBox = () => {
    const [cookieDialogBoxOpened, setCookieDialogBoxOpened] = useState<boolean>(true);

  return (
      cookieDialogBoxOpened ? (
          <div className="hidden md:block fixed px-6 bottom-2 z-50">
              <div className="w-3/4 mx-auto dark:bg-white bg-ourBlack p-6 space-y-3 shadow-md rounded-md">
                  <p className="text-sm text-center text-white dark:text-ourBlack">
                      We use cookies, lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Animi ea omnis saepe repellendus vero deserunt? Ut
                      deserunt dolor minima? Possimus iusto, by clicking the
                      &quot;OK&quot; button below, you agree to blah blah blah.
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                      <CommonButton
                            bigText={true}
                          buttonText="OK"
                          onClickHandler={() => setCookieDialogBoxOpened(false)}
                          isPrimary={true}
                      />
                  </div>
              </div>
          </div>
      ) : <></>
  );
}

export default CookieDialogBox