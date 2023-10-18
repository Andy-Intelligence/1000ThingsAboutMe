
import React, { useEffect, useState } from 'react'
import MarketPlaceCover from '@/components/ReadAboutSomeone/MarketPlaceCover'
import Link from 'next/link'
import { getAllBooks } from '@/backend/actions/book.actions'



const MarketPlace = async () => {
   

    // const [books, setBooks] = useState();
    
    // useEffect(() => {

    //    const fetchALLBooks = async ()=>{
            const fetchBooks = await getAllBooks()

            console.log("ss",fetchBooks)
            // setBooks(fetchBooks)
    // }
        
    // fetchALLBooks()
     
    // }, []);

// console.log(books)

// {
//     _id: new ObjectId("6515d33ac304350d44d5880b"),
//     author: new ObjectId("651203d3a61b0118fe8088e5"),
//     name: 'The legend of Kingkong',
//     caption: 'mee',
//     chapters: [ new ObjectId("6515d3d4c304350d44d58810") ],
//     createdAt: 2023-09-28T19:25:46.654Z,
//     updatedAt: 2023-09-28T19:28:21.072Z,
//     __v: 1
//   }
  return (
    <div className='w-full flex flex-col items-center justify-center font-custom2 min-h-screen bg-white'>
        <div className='flex flex-col md:space-x-8 items-center'>
            {fetchBooks && fetchBooks.map((item:any)=>{
                return (
                    <Link href={`/readposts/content/${item._id}`}>
                        <MarketPlaceCover name={item?.name} caption ={item?.caption} author={item?.author?.name}/>
                        {/* chapters = {item.chapters} */}
                    </Link> 
                )
            })}
        </div>
    </div>
  )   
}

export default MarketPlace