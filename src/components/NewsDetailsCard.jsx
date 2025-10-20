import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'


const NewsDetailsCard = ({news}) => {


   
  return (
    <div className='space-y-5'>
        <img className='w-full h-[350px] object-cover' src={news.image_url} alt='image'/>
        <h2>{news.title}</h2>
        <p>{news.details}</p>
        <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>Back to Category</Link>
    </div>
  )
}

export default NewsDetailsCard