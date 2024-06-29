import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div>
     <section class="bg-blue-50 min-h-screen flex-grow">
      <div class="container m-auto max-w-2xl py-24">
        <div
          class="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
          <div class="flex justify-center">
            <i
              class="fas fa-exclamation-triangle fa-5x text-8xl text-yellow-400"
            ></i>
          </div>
          <div class="text-center">
            <h1 class="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
            <p class="text-gray-500 text-xl mb-10">
              The page you are looking for does not exist.
            </p>
            <Link
              href="/"
              class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
              >Go Back</Link
            >
          </div>
        </div>
      </div>
      <div class="flex-grow"></div>
    </section>
    </div>
  )
}

export default NotFoundPage
