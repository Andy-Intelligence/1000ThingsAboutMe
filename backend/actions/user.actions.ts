"use server"
import { revalidatePath } from "next/cache";
import User from "../models/userModels/user.model";
import { connectToDB } from "../mongoDb/connect"






export async function fetchUser(userId: string | undefined) {
    connectToDB();
    try {
  const res = await User.findOne({ id: userId }).exec() 
  const user = JSON.parse(JSON.stringify(res))
      return user
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }


interface Params {
    userId?:string | null | undefined;
    username?:string | null | undefined;
    name?:string | null | undefined;
    bio?:string | null | undefined;
    image?:string | null | undefined;
    path?:string | null | undefined;
    email?:string | null | undefined;
    objectId?:string | null | undefined;
}

export async function updateUser({userId,username,name,bio,image,path,email,objectId}:Params):Promise<void>{
    connectToDB();

    
    try {
        await User.findOneAndUpdate({
            id:userId
        },
        {username:username?.toLowerCase(),name,objectId,bio,image,onboarded:true,email},{upsert:true})



        if (path === '/profile/edit'){
            revalidatePath(path);
        }

     
    } catch (error:any) {
        throw new Error(`Failed to create and Update user:${error.message}`)
    }

}