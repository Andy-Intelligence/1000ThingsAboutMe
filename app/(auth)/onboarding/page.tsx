"use client"
import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/backend/actions/user.actions";
// import {currentUser} from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/store'; // Import your Redux actions
import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";


interface RootState {
         user: Record<string, any>
         // Other slices of your state go here
      }
   function Page(){
    const [userData,setUserData] = useState({})
    const dispatch = useDispatch()
    // dispatch(setUser({name:"andy"}));
    // const user = useSelector((state:RootState) => state.user);
    // console.log(user)
    const user = useSelector((state:RootState) => state.user);
    if (!user) return null
    console.log(user)
    
    // const user = useSelector((state:RootState) => state.user);  // const user = await currentUser();

    // console.log(user)
    // if (!user) return null; // to avoid typescript warnings 
  useEffect(()=>{
    
const check =async ()=>{

    

    const userInfo = await fetchUser(user.id);
    if (userInfo?.onboarded) redirect("/");
    const madeUserData = {
        id:user?.id,
        objectId:userInfo?._id,
        username:userInfo?.username || user?.username,
        name:userInfo?.name || user?.firstName || "",
        bio:userInfo?.bio || "",
        image:userInfo?.image || user?.imageUrl
        
    }

    setUserData(madeUserData)
}
check()
  },[])

    


    return <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
    <h1 className="text-xl"> Onboarding</h1>
    <p className="mt-3 text-base text-black">Please Complete Your Profile</p>


    <section className="bg-buttonPurple mt-9 p-10">
        {/* <ProtectedRoute> */}
            <AccountProfile user= {userData} btnTitle = "Continue"/>
        {/* </ProtectedRoute> */}
    </section>
</main>
    
}

export default Page;