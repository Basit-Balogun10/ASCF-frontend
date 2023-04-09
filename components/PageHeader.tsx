import React from 'react'

interface propsType {
    alignLeft?: boolean;
    children: React.ReactNode;
    desc: string;
    pageTitle: string;
};

const PageHeader = ({alignLeft, children, desc, pageTitle}: propsType) => {
  return (
      <section className="h-min px-4 md:px-20 py-6 md:py-10 md:mx-4 space-y-3  md:space-y-0 space-x-0 md:space-x-4 flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between bg-ourDarkRed transition-all">
          <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className={`flex-initial  ${alignLeft ? "text-left" : "text-center"}  md:text-left`}
          >
              <h1 className="font-bold text-4xl mb-2">
                  {pageTitle.toUpperCase()}
              </h1>
              <h3 className="font-medium text-sm">{desc}</h3>
          </div>
          {children && children}
      </section>
  );
}

export default PageHeader