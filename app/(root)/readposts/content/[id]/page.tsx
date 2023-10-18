
import React, { useEffect } from 'react'
import ContentOutline from '@/components/ReadAboutSomeone/ContentOutline'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { getBookChapter } from '@/backend/actions/chapter.actions'
// import { useRouter } from 'next/navigation';

interface Params{
    bookId:string;
}

async function Contents({ params }: { params: { id: string } }) {

//     const a = usePathname()  
// console.log(a)
    // const pathName = usePathname()
    // const url = pathName;
    // const parts = url.split('/'); // Split the URL by '/'
    // const lastPart = parts[parts.length - 1];
    // const Id = lastPart
    // console.log(Id)
    
    // useEffect(()=>{
    //     const me = async()=>{
        console.log(params.id)
             const book = await getBookChapter({bookId:params.id})

            console.log(book) 
    //     }    

    //     me()
    // },[])   
      

     // sdewer {
    //     _id: new ObjectId("6515d33ac304350d44d5880b"),
    //     author: new ObjectId("651203d3a61b0118fe8088e5"),
    //     name: 'The legend of Kingkong',
    //     caption: 'mee',
    //     chapters: [
    //       {
    //         _id: new ObjectId("6515d3d4c304350d44d58810"),
    //         book: new ObjectId("6515d33ac304350d44d5880b"),
    //         header: 'chapter 1',
    //         text: 'things fell apart but i managed',
    //         createdAt: 2023-09-28T19:28:20.637Z,
    //         updatedAt: 2023-09-28T19:28:20.637Z,
    //         __v: 0
    //       }
    //     ],
    //     createdAt: 2023-09-28T19:25:46.654Z,
    //     updatedAt: 2023-09-28T19:28:21.072Z,
    //     __v: 1
    //   }
    return (
        <div className='bg-black text-white min-h-screen font-custom2'>
        <div className='w-full h-screen  p-8 flex flex-col  items-center space-y-5'>
            <h1 className='font-bold text-3xl text-white'>Summary</h1>
        {/* <button className='bg-yellow-500 p-2 rounded-lg text-white font-custom2'>Start reading</button>      */}

            <section className='flex flex-col'> 
                <div className='space-y-2'>
                {book && book.chapters.map((item:any,i:any)=>{

                     // +(i +1) is done so i can pass the chapter number to the chapter component
                return (
                    <Link href={`/readposts/chapter/${params.id}/${item._id+(i+1)}`}>
                        <ContentOutline header = {item.header} text = {item.text} number = {i+1}/>
                        {/* chapters = {item.chapters} */}
                    </Link> 
                )
            })}         
                    
                </div>
            </section>
            
        </div> 

    </div>
  )
}

export default Contents




