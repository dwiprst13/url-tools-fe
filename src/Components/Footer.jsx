import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black relative border-t rounded-t-2xl border-gray-200 dark:border-gray-800 transition-colors duration-300 text-white">
        <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
            <p>
            &copy; {new Date().getFullYear()} DPrast URL Tools. All rights reserved.
            </p>
            <p>
            Part of <a href="https://dprast.com" className="text-orange-600 hover:underline">DPrast</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer
