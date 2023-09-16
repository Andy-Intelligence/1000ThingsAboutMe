"use client"
import NavBar from '@/components/sections/NavBar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BannerSection from '@/components/sections/BannerSection'
import ProductSection from '@/components/sections/ProductSection'
import SolarSection from '@/components/sections/SolarSection'
import ProductFeaturesSection from '@/components/sections/ProductFeaturesSection'
import ReviewSection from '@/components/sections/ReviewSection'
import SolarVideoSection from '@/components/sections/SolarVideoSection'
import LocationSection from '@/components/sections/LocationSection'
import ImpactSection from '@/components/sections/ImpactSection'
import GallerySection from '@/components/sections/GallerySection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import CopyRight from '@/components/sections/CopyRight'
import Marquee from '@/components/banner/Marquee'
import Menu from '@/components/overlay/Menu'
import { useState,useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import RealSun3 from '@/public/assets/realSun3.png'
import ScrollMagicImage from '@/components/gsap/ScrollMagicImage'
import ScrollMagicImage2 from '@/components/gsap/ScrollMagicImage2'
import SolarPackages from '@/components/pages/SolarPackages'

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ['latin'] })

//export const metadata: Metadata = {
//  title: 'Create Next App',
//  description: 'Generated by create next app',
//}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showMenuOrNav, setShowMenuOrNav] = useState(true);



  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    gsap.to(containerRef.current, {
      y: '-30%', // Adjust the vertical movement speed
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
      },
    });
  },[])

  const toggleComponents = () => {
    setShowMenuOrNav(!showMenuOrNav);
    console.log(showMenuOrNav)
  };



  return (
    <html lang="en">
      <body className="">


        <main className=''>
          <section className='flex flex-col items-center '>
              {showMenuOrNav ? (<NavBar toggleComponents={toggleComponents}/>) : (<Menu toggleComponents={toggleComponents} />)}
              <BannerSection/>


            <ScrollMagicImage2/>
            <ScrollMagicImage/>
            
                

          </section>
          <section className='flex flex-col z-10  items-center space-y-10  text-white '>
            <Marquee/>
            <ProductSection/>
            <SolarSection/>
            <ProductFeaturesSection/>
            <ReviewSection/>
            <SolarVideoSection/>
            <LocationSection/>
            <ImpactSection/>
            <GallerySection/>
            <CTASection/>
            <SolarPackages/>

          <Footer/>
          <CopyRight/>
          </section>

          {/* <div id="bg" > */}
                  {/* <Image src = {RealSun3.src} width= {100} height={100} alt='..'/> */}
            {/* <img className='w-full h-auto' src={RealSun3.src} alt="..."/> */}
                 
        {/* </div> */}
        </main>

      </body>
    </html>
  )
}
