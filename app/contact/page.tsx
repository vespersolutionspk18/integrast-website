import React from 'react'
import Header from '../Header'
import GetinTouchSection from '../GetinTouchSection'
import Faqsection from '../Faqsection'
import Footer from '../Footer'
import ContactHero from './ContactHero'

const page = () => {
  return (
    <div>
        <Header />
        <ContactHero         />
        <GetinTouchSection />
        <Faqsection />
        <Footer />
    </div>
  )
}

export default page