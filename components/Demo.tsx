"use client"
import {useEffect,useState} from 'react';
import {AiOutlineCopy} from 'react-icons/ai'
import {FiLink2} from 'react-icons/fi'
import {AiOutlineEnter} from 'react-icons/ai'
import { getSingleBook } from '@/backend/actions/book.actions';
import Link from 'next/link';

// import {copy,linkIcon, loader, tick} from '../assets'
const Demo = () => {

  const [bookId, setBookID] = useState({bookId:""}) //which is just the book Id
  const [searchResult, setSearchResult] = useState<any>({_id:true})
  

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    
    console.log(bookId)

   const book =  await getSingleBook({bookId:bookId.bookId})

   console.log(book)
   setSearchResult(book)

  }




 
  return (
    <section className='mt-8 max-w-xl w-[93%]'>
      <div className='flex flex-col w-full gap-2'>
        <form 
        className='relative flex justify-center items-center w-full'
        onSubmit={handleSubmit}
        >
            {/* <img 
            src=''
            alt="link_icon"
            className='absolute left-0 my-2 ml-3 w-5'/> */}
            <FiLink2 className = "absolute left-0 my-2 ml-3 w-5"/>

            <input
            type="text"
            placeholder='Enter an ID To Read About Someone'
            value={bookId.bookId}
            onChange={(e)=> setBookID({...bookId,bookId:e.target.value})}
            required 
            className='digitalID-input peer block w-full rounded-md border border-gray-200 bg-white py-2.5 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0  pl-10 placeholder:italic h-10 '
            />

            <button 
            type='submit'
            className='submit-btn hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700'>
                <AiOutlineEnter/>
            </button>
        </form>  


{    searchResult?._id ?    (<Link href={`/readposts/content/${searchResult?._id}`}>
  {/* <MarketPlaceCover name={item?.name} caption ={item?.caption} /> */}
  {/* chapters = {item.chapters} */}
  {/* <div>{searchResult?._id}</div> */}
  <div className='pb-2'>
    <div className='font-bold'>{searchResult?.author?.name}</div>
    <div className='text-sm'>{searchResult?.name}</div>
  </div>
    {/* <div className='text-sm'>{searchResult?.chapters} {searchResult?.chapters && <span>chapters</span>}</div> */}
  
  {/* <div>{searchResult?.caption}</div> */}
  {/* <div>{searchResult?.author?._id}</div> */}
</Link>): (<div className='p-2 text-red-500'>Does not exist!</div>)  }
     
        
      </div>

      {/* Display results */}
    </section>
  )
}

export default Demo