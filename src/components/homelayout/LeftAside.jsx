import React, { Suspense } from 'react'
import Categories from '../Categories'


const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<div><span className="loading loading-spinner text-primary"></span></div>}>
        <Categories/>
      </Suspense>
    </div>
  )
}

export default LeftAside