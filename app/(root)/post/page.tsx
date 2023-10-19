"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { PostValidation } from '@/validations/post';
import questions from '@/lib/questions';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form"
import { Input } from "../../../components/ui/input"
import { Button } from '../../../components/ui/button';
import {Textarea} from '../../../components/ui/textarea'
import * as z from "zod"
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
// import {useUploadThing} from '@/lib/uploadthing'
// import { isBase64Image } from '@/lib/utils';
// import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react'
import { createChapter } from '@/backend/actions/chapter.actions';

import { useDispatch, useSelector } from 'react-redux';

import { UserState } from '../../../redux/store'; // Import your RootState type
import { UserAuth } from '@/context/MyContext';


interface RootState {
  user:Record<string, any>
}

const Write = () => {
  const {user} = UserAuth()
  const pathName = usePathname()
  // const dispatch = useDispatch();
  const router = useRouter()
  // const user = useSelector((state:RootState) => state.user);
  // console.log(user)
  const [randomQuestion, setRandomQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQ = questions[randomIndex];
    setRandomQuestion(randomQ);
  };

const form = useForm({resolver: zodResolver(PostValidation),
  defaultValues:{
    chapterHeader: '',
    text: '',
  }
  })



  const onSubmit = async (values:z.infer<typeof PostValidation>) =>{
    //this will be type safe and validated
      console.log(values)

      await createChapter({
        userId:user?.uid,header:values.chapterHeader,text:values.text,path:pathName
      })
      

      // router.push('/')
      

// call backend function to update user profile

// await updateUser(
//   {userId:user.id,
//   username:values.username,
//   name:values.name,
//   bio:values.bio,
//   image:values.profile_photo,
//   path:pathname
// }
// )

if(pathName === '/post/edit'){
  router.back()
} else{
  router.push('/');
}

      }

  return (<div className='flex items-center justify-center flex-col min-h-screen bg-black pt-2'>
  <div className='flex flex-col items-center justify-center w-[90%]'>
    <button className='bg-green-500 rounded-lg p-1' onClick={getRandomQuestion}>Generate Question</button>
    <div className='text-white'>
      <strong ></strong> {randomQuestion}
    </div>
  </div>
    <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col  gap-10 w-[90%] items-center justify-center bg-black">



    <FormField
        control={form.control}
        name="chapterHeader"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-2xl text-bold text-white'>
              Header
            </FormLabel>
            <FormControl className='flex-1 text-base text-bold text-gray-200'>
              <Input 
                type = "text"
                className='account-form_input no-focus text-white bg-black'
                placeholder="write your chapter header here.."
                {...field}
              />
            </FormControl>
            
          </FormItem>
        )}
      />




    <FormField
        control={form.control}
        name="text"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-2xl text-bold text-white'>
              Content
            </FormLabel>
            <FormControl className='flex-1 text-base text-bold text-gray-200'>
              <Textarea 
              placeholder='write your content here..'
                rows ={15}
                className='account-form_input no-focus text-white bg-black'
                {...field}
              />
            </FormControl>
            
          </FormItem>
        )}
      />


      <Button type="submit">Post</Button>
    </form>
  </Form>
  </div>
  )
}

export default Write
