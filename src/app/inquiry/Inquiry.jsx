import Cta from '@/components/inquiry/Cta'
import Footer from '@/components/inquiry/Footer2'
import Header from '@/components/inquiry/Header'
import Hero from '@/components/inquiry/Hero'
import Manufactuer from '@/components/inquiry/Manufactuer'
import Product1 from '@/components/inquiry/Product1'
import Product2 from '@/components/inquiry/Product2'
import FeatureStrip from '@/components/LandingPage/FeatureStrip'
import WhyChooseUs from '@/components/LandingPage/WhyChooseUs'
import WhatsApp from '@/components/WhatsApp'
import React from 'react'

export default function Inquiry() {
  return (
    <>
    <WhatsApp/>
    <Header/>
    <Hero/>
    <FeatureStrip/>
    <Product1/>
    <Manufactuer/>
    <Product2/>
    <WhyChooseUs/>
    <Cta/>  
    <Footer/>
    </>
  )
}
