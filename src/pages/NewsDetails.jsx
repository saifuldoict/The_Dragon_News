import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import RightAside from '../components/homelayout/RightAside'
import NewsDetailsCard from '../components/NewsDetailsCard'
import { useLoaderData } from 'react-router'
import { useParams } from 'react-router'

const NewsDetails = () => {
  const data = useLoaderData();
      const {id}= useParams();
      const [news, setNews]= useState({})
      // console.log(data, id)


       useEffect(()=>{
        const newsDetails = data.find((singleNews)=>singleNews.id==id);
        setNews(newsDetails)
    },[data, id])
  return (
    <div>
      <header className='py-'>
        <Header/>
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
      <section className='col-span-9'>
          <h2>News Details</h2>
          <NewsDetailsCard news={news}/>
      </section>
      <aside className='col-span-3'>
        <RightAside/>
      </aside>
      </main>
    </div>
  )
}

export default NewsDetails