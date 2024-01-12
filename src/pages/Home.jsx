import React from 'react'
import Hero from '../components/Hero';
import FadeInOnScroll from '../components/FadeInOnScroll';
import ImageBuilder from '../components/ImageBuilder';


const Home = () => {
  return (
    <div>
    <FadeInOnScroll>
      <Hero />
      <ImageBuilder />
    </FadeInOnScroll>
    </div>
  )
}

export default Home
