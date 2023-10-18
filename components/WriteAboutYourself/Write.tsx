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
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from '../ui/button';
import {Textarea} from '../ui/textarea'
import * as z from "zod"
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
// import {useUploadThing} from '@/lib/uploadthing'
// import { isBase64Image } from '@/lib/utils';
// import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react'





const Write = () => {


const form = useForm({resolver: zodResolver(PostValidation),
  defaultValues:{
    chapterHeader: '',
    text: '',
  }
  })



  const onSubmit = async (values:z.infer<typeof PostValidation>) =>{
    //this will be type safe and validated
      console.log(values)

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

// if(pathname === '/profile/edit'){
//   router.back();
// } else{
//   router.push('/');
// }

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
                className='account-form_input no-focus'
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
                className='account-form_input no-focus'
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
