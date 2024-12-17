import React from 'react';

const Sectionfive = () => {
  return (
    <div>
      <section className="text-gray-800 body-font bg-pink-100 py-16 ">
        <div className="  w-1440 h-744 mx-13246 my-1655 container mx-auto">
          {/* Section Title */}
          <h1 className="   text-absolute left-4 2ext-2xl font-medium text-2A254B   mb-12">
            Our popular products
          </h1>

          {/* Product Grid */}
          <div className="flex justify-center gap-6">
            {/* Product 1 - Green Sofa */}
            <div className="flex flex-col items-center w-[480px]">
              <img
                className="w-[600 px] h-[360px]  my-8 object-cover rounded-md"
                alt="The Poplar suede sofa"
                src="GreenSofa.png"
              />
              <p className="mt-4 text-lg font-medium text-gray-800 text-center">
                The Poplar suede sofa
              </p>
              <p className="text-gray-600 text-sm">£960</p>
            </div>

            {/* Product 2 - Dandy Chair */}
            <div className="flex flex-col items-center w-[300px]">
              <img
                className="w-[300px] h-[360px] object-cover rounded-md"
                alt="Dandy Chair"
                src="Dandychair.png"
              />
              <p className="mt-4 text-lg font-medium text-gray-800 text-center">
                The Dandy chair
              </p>
              <p className="text-gray-600 text-sm">£250</p>
            </div>

            {/* Product 3 - Dark Dandy Chair */}
            <div className="flex flex-col items-center w-[300px]">
              <img
                className="w-[300px] h-[360px] object-cover rounded-md"
                alt="Dark Dandy Chair"
                src="Graychair.png"
              />
              <p className="mt-4 text-lg font-medium text-gray-800 text-center">
                The Dark Dandy chair
              </p>
              <p className="text-gray-600 text-sm">£250</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectionfive;
