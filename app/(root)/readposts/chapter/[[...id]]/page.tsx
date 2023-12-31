"use client"
import { getBookChapter, getChapter } from '@/backend/actions/chapter.actions';
import { sendMessage } from '@/backend/actions/message.actions';
import React, { useEffect, useState ,useRef} from 'react'
import { UserAuth } from '@/context/MyContext';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide, SwiperProps, useSwiper } from "swiper/react";
import {PiCaretLeftBold} from 'react-icons/pi'
import {PiCaretRightBold} from 'react-icons/pi'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();
// interface Params{
  //   bookId?:string;
  //   header?:string;
  //   text?:string;
  //   number?:string;
  // }
  // { slug: ['a', 'b', 'c'] }
   function Chapter({ params }: { params: { id: string[];
    header?:string;
    text?:string;
    number?:string;  } }) {
      const { user } = UserAuth() ?? { user: null };
      
    const [comment, setComment] = useState({content:""})
    const [chapter, setChapter] = useState<any>({})
    const [id, setId] = useState<any>("")
    const [book, setBook] = useState<any>("")
    const [index, setIndex] = useState<any>(0)

    //this params.id has a number attached to the end which i am looking for
   

    useEffect(()=>{ 
      
      
      const me = async () =>{
        const bookId = params.id[0]
        const res = await getBookChapter({bookId:bookId})
        setBook(res) 
        console.log("i am book",params?.id)
        const first24Characters = params.id[1]
      const str = first24Characters.substring(0, 24);
      const number = first24Characters.substring(24);
      setIndex(number)
       console.log("nnnnn",str)   
       setId(str)
        // console.log("id",id)         
        // const chapter = await getChapter({chapterId:str})
        // setChapter(chapter)    
        // console.log("c",chapter)    
   
        
  }  
  me()
},[params.id[1]])



  // const [bookId, setBookID] = useState({bookId:""}) //which is just the book Id
  // const [searchResult, setSearchResult] = useState<any>({_id:true})
  

  const handleSubmit = async (e:any,chapter:any)=>{
    e.preventDefault()
    
    console.log(chapter) 

    console.log("chapterId",chapter?._id)
   const book =  await sendMessage({content:comment?.content,sender:user?.uid,receiver:id,chapterId:id})
  //  "651b4d41ab245ed190e19ee0"
    
  //  console.log(book)  
  //  setSearchResult(book)
 
  setComment({ content: "" });
  }
  const handleAnonymousSubmit = async (e:any,chapter:any)=>{
    e.preventDefault()
    
    console.log(chapter) 

    console.log("chapterId",chapter?._id)
   const book =  await sendMessage({content:comment?.content,sender:user?.uid,receiver:id,chapterId:id,anonymous:true})
  //  "651b4d41ab245ed190e19ee0"
    
  //  console.log(book)  
  //  setSearchResult(book)
 
  setComment({ content: "" });
  }
  // const swiper = useSwiper()
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)
  const swiperRef = useRef<any>(null);

  const [initialSlide, setInitialSlide] = useState(0); // Change this to set your desired initial slide
  const [swiper, setSwiper] = useState<any>(null);
  // swiper?.slideTo(index)
  // ...  
  
  useEffect(() => {
    // Fetch your data or perform other actions here
    swiperRef?.current?.swiper?.slideTo(index-1)

    // swiper?.slideTo(index)
  }, [index,swiperRef]);

  return (  
    <div className='bg-black '>
      <div className='flex items-center flex-row relative min-h-screen w-screen p-0 m-0 text-black'> 
      {/* <div className=' flex flex-col'>
        
        
      </div> */}   
      
      <div className='fixed z-10 left-0 bottom-40 text-white flex items-center justify-center' ref={(node) => setPrevEl(node)}><PiCaretLeftBold size={45} className="text-red-500"/></div>
       <Swiper
      //  onSwiper={(s) => setSwiper(s)}
        pagination={{
          type: 'fraction',
        }}
        navigation={{ prevEl, nextEl }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        // EffectFade
        // effect = "fade"
        className="h-full w-full"
        slidesPerView={1}
        // initialSlide={2}
        ref = {swiperRef} 
        // onSwiper={(swiper)=>{
        //   swiper.slideTo(2,0)
        //   console.log("swiper")}} 
      >
{/* <SwiperSlide>1</SwiperSlide>
<SwiperSlide>2</SwiperSlide>
<SwiperSlide>3</SwiperSlide>
<SwiperSlide>4</SwiperSlide>
<SwiperSlide>5</SwiperSlide> */}
        {book?.chapters?.map((item:any,i:any)=>{
          const index = i+1
          return (  
<SwiperSlide key={item?._id} className = 'swiper-slide pt-10'>
          <section className='flex flex-col space-y-4 items-center mb-8'>
              <div className='flex flex-col space-y-4 items-center text-center'>
                  <h1 className='underline text-4xl font-bold font-custom2'>{index >= book?.chapters?.length ? (<span className='text-red-400'>{index}</span>) : (<span className='text-yellow-400'>{index}</span>)}/<span className='text-red-400'>{book?.chapters?.length}</span></h1>
                  <h2 className='text-2xl font-bold font-custom2 w-[90%]'>{item?.header}</h2>
              </div>
               
              <div className='text-lg font-custom2 leading-8 w-[90%]'>
                {item?.text}  
              </div>
          </section>


          <section className='flex flex-col md:flex-col md:space-x-4 my-4 w-full items-center space-y-4'>
          <form onSubmit={(e)=>handleSubmit(e,item?._id)} className='flex flex-col items-center space-y-4'>
            <input value={comment?.content}
              onChange={(e)=> setComment({...comment,content:e.target.value})} 
              placeholder='Write a comment...' 
              type='text' 
              className='md:w-[30rem] w-[20rem] border border-gray-300 p-1 px-4 rounded-[30rem] text-black placeholder-gray-500 font-custom2 h-12'/>  

        <button onSubmit={(e)=>handleSubmit(e,item?._id)} className='bg-yellow-500 p-2 rounded-lg text-white font-custom2'>Comment</button>
        <button onClick = {(e)=>handleAnonymousSubmit(e,item?._id)} className='bg-violet-950 p-2 rounded-lg text-white font-custom2'>Comment as Annonymous</button>
          </form>
            
        </section>

        <section className=' text-white w-[100%] mb-10'>
          {item?.comments?.slice().reverse().map((item: any) => {
              return (
                <div key={item?._id} className='border flex flex-col justify-start items-start border-yellow-400 text-white m-2  p-2 px-3 rounded-[30px]'>
                  {/* <div>Comment:</div> */}
                  <div className = "flex flex-col items-start justify-start">
                    <i>{item?.content}</i>
                    {item?.anonymous === true ? (<div>-<b className='text-white text-sm'>{`Anonymous`}</b> <span className='text-sm'>{`${item?.createdAt.substring(0,10)}`}</span></div>):(<div>-<b className='text-sm'>{item?.sender?.name}</b> <span className='text-sm'>{`${item?.createdAt.substring(0,10)}`}</span></div>)}
                  </div>
                    
                </div>
              );
            })}
        </section>

        </SwiperSlide>
          )
        })}

      </Swiper>
        <div className = "fixed z-10 right-0 bottom-40 text-white flex items-center justify-center" ref={(node) => setNextEl(node)}><PiCaretRightBold size={45} className= "text-red-500"/></div>
      </div>
      
          

    </div>
  )
}

export default Chapter





// "use client"

// import { getBookChapter } from '@/backend/actions/chapter.actions';
// import { sendMessage } from '@/backend/actions/message.actions';
// import React, { useEffect, useState, useRef } from 'react';
// import { UserAuth } from '@/context/MyContext';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
// // import 'swiper/swiper-bundle.css';
// // import 'swiper/swiper-bundle.min.css';
// import 'swiper/css';
// import 'swiper/css/pagination'; 
// import 'swiper/css/navigation';


// import 'swiper/css/effect-fade';

// // import required modules
// import { Pagination, Navigation, EffectFade } from 'swiper/modules';

// // import function to register Swiper custom elements
// import { register } from 'swiper/element/bundle';

// // register Swiper custom elements
// register();

// function Chapter({ params }: { params: { id: string[]; header?: string; text?: string; number?: string } }) {
//   const { user } = UserAuth() ?? { user: null };

//   const [comment, setComment] = useState({ content: '' });
//   const [book, setBook] = useState<any>({});
//   const [index, setIndex] = useState<number>(0);

//   useEffect(() => {
//     const me = async () => {
//       const bookId = params.id[0];
//       const res = await getBookChapter({ bookId: bookId });
//       setBook(res);
//       console.log(book)
//       const number = parseInt(params.id[1], 10);
//       setIndex(number);
//     };
//     me();
//   }, [params.id]);  

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const bookId = params.id[0];
//     const chapterId = book.chapters[index - 1]._id;
//     console.log(chapterId)
//     const donebook = await sendMessage({
//       content: comment.content,
//       sender: user?.uid,
//       receiver: chapterId,
//       chapterId: bookId,
//     });
//     setComment({ content: '' });
//   };

//   const prevEl = useRef(null);
//   const nextEl = useRef(null);

//   return (
//     <div className="bg-black">
//       <div className="flex items-center flex-row relative min-h-screen w-screen p-0 m-0 text-black">
//         <div className="fixed z-10 left-0 bottom-40 text-white bg-red-500 flex items-center justify-center" ref={prevEl}>
//           <PiCaretLeftBold size={35} />
//         </div>
//         <Swiper
//           pagination={{
//             type: 'fraction', 
//           }}
//           navigation={{ prevEl: prevEl.current, nextEl: nextEl.current }}
//           className="h-full w-full"
//           slidesPerView={1}
//           initialSlide={index - 1}
//         >
//           {book?.chapters?.map((item: any, i: number) => (
//             <SwiperSlide key={item._id} className="swiper-slide pt-10">
//               <section className="flex flex-col space-y-4 items-center mb-8">
//                 <div className="flex flex-col space-y-4 items-center text-center">
//                   <h1 className="underline text-4xl font-bold font-custom2">{i + 1}</h1>
//                   <h2 className="text-2xl font-bold font-custom2">{item.header}</h2>
//                 </div>

//                 <div className="text-lg font-custom2 leading-8 w-[90%]">{item.text}</div>
//               </section>

//               <section className="flex flex-col md:flex-col md:space-x-4 my-4 w-full items-center space-y-4">
//                 <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
//                   <input
//                     value={comment.content}
//                     onChange={(e) => setComment({ content: e.target.value })}
//                     placeholder="Write a comment..."
//                     type="text"
//                     className="md:w-[30rem] w-[20rem] border border-gray-300 p-1 px-4 rounded-[30rem] text-black placeholder-gray-500 font-custom2 h-12"
//                   />

//                   <button className="bg-yellow-500 p-2 rounded-lg text-white font-custom2">Comment</button>
//                 </form>

//                 <button className="bg-red-500 p-2 rounded-lg text-white font-custom2">Comment as Anonymous</button>
//               </section>

//               <section className="text-white w-[100%] mb-10">
//                 {item.comments.slice().reverse().map((comment: any) => (
//                   <div key={comment._id} className="text-red-500 m-2 p-2 px-3 rounded-[30px]">
//                     - <i>{comment.content}</i>
//                   </div>
//                 ))}
//               </section>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="fixed z-10 right-0 bottom-40 text-white bg-red-500 flex items-center justify-center" ref={nextEl}>
//           <PiCaretRightBold size={35} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chapter;




