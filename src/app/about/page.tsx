import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
        <Link href={"about/produc"}>product</Link>
      this is my new page
      <div className="border-t border-gray-300"></div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-center space-x-6 h-12 bg-gray-50">
      
        {/* <a href="" className="text-gray-700 hover:text-black">Plant pots</a> */}
        <a href="#" className="text-gray-700 hover:text-black">Ceramics</a>
        <a href="#" className="text-gray-700 hover:text-black">Tables</a>
        <a href="#" className="text-gray-700 hover:text-black">Chairs</a>
        <a href="#" className="text-gray-700 hover:text-black">Crockery</a>
        <a href="#" className="text-gray-700 hover:text-black">Tableware</a>
        <a href="#" className="text-gray-700 hover:text-black">Cutlery</a>
      </div>
    </div>
  )
}

export default About
