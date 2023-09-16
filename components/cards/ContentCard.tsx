"use client"
import Image from "next/image";
import { ReactNode } from "react";


interface ContentProp {
    title?:string;
    img1?:string;
    textHeader?:string;
    text?:string;
    img2?:string;
    background?:string;
    button?:ReactNode;
    bg?:string;
    tag?:string;
    height?:string;
}
const ContentCard = ({tag,title,img1,textHeader,text,img2,background,button,bg,height}:ContentProp) => {
    // const backgroundClass = `bg-cover bg-center bg-no-repeat bg-fixed bg-image-${bg.src.replace(/\//g, '-')}`;

    const handleClick = ()=>{
        alert("Button Clicked")

    }

  return (
    
    <section className={` flex flex-col items-start px-6 pt-8 bg-cover bg-center bg-no-repeat rounded-[30px] ${background ? String(height) : "min-h-fit"}`}
    style={{backgroundImage:`url(${background})`,
background:bg}} 
    >
       {tag && <span className="bg-gray-800 text-white font-bold text-sm rounded-[30px] py-2 px-4 my-4">{tag}</span>}


        <h1 className="text-3xl font-bold font-custom flex-wrap my-1 pb-3">
            {title}
        </h1>
        {img1 &&  
            <div className="py-3">
            <Image  src={img1} className="h-auto" alt="img" width={300} height={80}/>
            </div>
        }
        <div className="text-left ">
            {textHeader && <i className="font-custom font-bold">{textHeader}: </i>}
            <i className="">{text}</i>
        </div>
        {button && 
            <div className="my-5">
                {button}
            </div>
        }
        {img2 && 
            <div className="pt-3">
            <Image  src={img2} className="h-auto" alt="img" width={300} height={80}/>
            </div>
        }
    </section>
    
  )
}

export default ContentCard