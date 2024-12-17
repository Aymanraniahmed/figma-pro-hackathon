import React from 'react'

const Sectionsevn = () => {
  return (
    <div className='flex items-center justify-center w-full h-[603px]'>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className='container mx-auto flex flex-row items-center justify-between w-full h-[603px] px-5'>
          
          {/* Text Section */}
          <div className="flex flex-col w-1/2">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <p className="text-gray-600">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps
              cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
              tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.
            </p>
          </div>

          {/* Image Section */}
          <div className='flex w-1/2 justify-end'>
            <img
              alt="Cotion"
              src="Covercotion.png"
              className="w-[500px] h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sectionsevn;
