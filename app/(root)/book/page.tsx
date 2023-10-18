"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { BookValidation } from '@/validations/book';

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
import Link from 'next/link';
import { createBook } from '@/backend/actions/book.actions';
import { useDispatch, useSelector } from 'react-redux';

import { UserState } from '../../../redux/store'; // Import your RootState type
import { useContext } from 'react';
import {UserAuth} from '../../../context/MyContext'

interface RootState {
  user:Record<string, any>
}

const Book = () => {
  // const b = useSelector((state:UserState) => state.user)
  const router = useRouter()
  const pathName = usePathname()
  // const dispatch = useDispatch();
  // const theme = useContext(UserContext);
  // const user = useSelector((state:UserState) => state.user);
  // console.log("book",user)

  const {user} = UserAuth()

console.log("user",user)
const form = useForm({resolver: zodResolver(BookValidation),
  defaultValues:{
    name: '',
    caption: '',
  }
  })



  const onSubmit = async (values:z.infer<typeof BookValidation>) =>{
    //this will be type safe and validated
      console.log(values)
// console.log("submit",user)
      await createBook(
          {
            userId:user?.uid,
            caption:values.caption,
            name:values?.name
          }
      )


      // await deleteBook({userIdd:"ll",bookIdd:""})

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

if(pathName === '/book/edit'){
  router.push("/")
} else{
  router.push('/post');
}

      }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-start gap-10 ">



    <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base text-bold'>
              Name
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
        name="caption"
        render={({ field }) => (
          <FormItem className='flex flex-col gap-3 w-full'>
            <FormLabel className='text-base text-bold'>
              Caption
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




  










<Button type="submit">Create</Button>

      {/* <Link href={'/post'}>
        
      </Link> */}
    </form>
  </Form>
  )
        }

        export default Book