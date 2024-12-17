import React from 'react'
import { BiPurchaseTag } from 'react-icons/bi'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'
import { LuSprout } from 'react-icons/lu'
import { TbTrack, TbTruckDelivery } from 'react-icons/tb'

const Sectionfour = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
      What makes our brand different
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <TbTruckDelivery/>
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Next day as standard
        </h2>
        <p>Order before 3pm and get your order
        the next day as standard</p>
       
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <IoCheckmarkCircleOutline/>
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Made by true artisans
        </h2>
        <p>Handmade crafted goods made with
        real passion and craftmanship</p>
       
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
     
      <BiPurchaseTag/>

        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Unbeatable prices
        </h2>
        <p>For our materials and quality you won’t find better prices anywhere</p>
       
      </div>
      <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      
      <LuSprout/>
        <h2 className="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">
        Recycled packaging
        </h2>
        <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
       
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button>
  </div>
</section>

    </div>
  )
}

export default Sectionfour
