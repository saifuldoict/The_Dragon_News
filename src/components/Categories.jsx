import React, { use } from 'react'
import { NavLink } from 'react-router'

const categoryPromise = fetch('../categories.json')
.then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise)
  return (
    <div>
        <div>
      <h1> All Categories:({categories.length})
        <div className='flex flex-col gap-2 mt-4 '>
          {categories.map(category => (
          <NavLink to={`/category/${category.id}`}  key={category.id} className="btn bg-white border-0 ">{category.name}</NavLink>
        ))}
        </div>
      </h1>
    </div>
    </div>
  )
}

export default Categories