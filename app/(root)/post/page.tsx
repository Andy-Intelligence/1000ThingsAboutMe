"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { PostValidation } from '@/validations/post';

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

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10">



    <FormField
        control={form.control}
        name="chapterHeader"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base text-bold'>
              Chapter Header
            </FormLabel>
            <FormControl className='flex-1 text-base text-bold text-gray-200'>
              <Input 
                type = "text"
                className='account-form_input no-focus text-black'
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
            <FormLabel className='text-base text-bold'>
              Text
            </FormLabel>
            <FormControl className='flex-1 text-base text-bold text-gray-200'>
              <Textarea 
                rows ={15}
                className='account-form_input no-focus text-black'
                {...field}
              />
            </FormControl>
            
          </FormItem>
        )}
      />













      <Button type="submit">Post</Button>
    </form>
  </Form>
  )
}

export default Write
