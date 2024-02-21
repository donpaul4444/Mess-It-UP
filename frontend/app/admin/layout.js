import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function layout({children}) {
  return (

        <div>
       <div className='flex-grow w-full max-w-screen-xl mx-auto'>{children}</div>
        <Footer/>
        </div>
  )
}

export default layout
