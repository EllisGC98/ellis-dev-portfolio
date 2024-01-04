import React from 'react'
import Hero from '../components/Hero';
import FadeInOnScroll from '../components/FadeInOnScroll';


const Home = () => {
  return (
    <div>
    <FadeInOnScroll>
      <Hero />
    </FadeInOnScroll>
    </div>
  )
}

export default Home
