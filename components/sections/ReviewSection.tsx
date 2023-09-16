import MoreReviews from "../cards/MoreReviews"
import TitleCounter from "../cards/TitleCounter"
import React, { useEffect, useRef } from 'react';
import useSkewScroll from '@/components/gsap/utility/useSkewScroll';


const ReviewSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
  if (!containerRef.current) return 
  useSkewScroll(containerRef);
  
  },[])
  return (
    <div ref = {containerRef} className="w-[90%]">
      <TitleCounter
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit molestias laboriosam cupiditate consequuntur quibusdam optio iste eos, nemo eaque provident!"}
      name={"Ryan Davis"}
      location={"Lagos, Nigeria"} 
      rating={5}
      />

      <MoreReviews/>
    </div>
  )
}

export default ReviewSection