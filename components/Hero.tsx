"use client"
import logo from "../public/assets/1000.jpg";
import Button from "./buttons/Button";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/store'; // Import your Redux actions
import { fetchUser, updateUser } from "@/backend/actions/user.actions";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
// import { UserState } from '../redux/store'; // Import your RootState type
import { UserAuth } from '../context/MyContext';
import { usePathname } from "next/navigation";

const Hero = () => {
  const { user, googleSignIn, logOut } = UserAuth() ?? { user: null };
  const pathname = usePathname()
  const [copySuccess, setCopySuccess] = useState('Click Me to Copy About Me Link And Share');
  const [loading, setLoading] = useState(true);
  const [bookId, setBookId] = useState(""); 
  const fixedPart = `https://1000thingsaboutme.vercel.app/readPosts/content/`
  const textToCopy = fixedPart + bookId;
  const router = useRouter();
  const redirectToWrite = async () => {
    console.log(user?.uid)
    const mongoDbUser = await fetchUser(user?.uid)

    console.log("mm",mongoDbUser)

    if(mongoDbUser?.books && mongoDbUser?.books !== 0 && mongoDbUser?.books.length >= 1){

      router.push('/post'); 
    }     

    else{
      router.push("/book")
      
    }
  };
  const redirectToRead = () => {
    router.push('/readposts/marketPlace'); // Replace '/desired-route' with the actual route you want to redirect to
  };

 
  // const dispatch = useDispatch();
  // const b = useSelector((state:UserState) => state.user)
  // const user = useSelector((state:UserState) => state.user);
  // console.log(user)
  //  use this to get the user in the provider

  useEffect(() => {
  //  652287d8c485eea588ded931
  const dynamicFetch = async () =>{
         fetchUser(user?.uid).then((res)=>{

          console.log(res)
        console.log("bi",res?.books[0]) 
        const a = res?.books[0]
       
          setBookId(a);
          setLoading(false)
        }).catch((error)=>{

          console.error('Failed to fetch data: ', error);
          setLoading(false)
        });
      }
if(user){
      dynamicFetch()
}
  //  console.log(pathname)
  }, [user]);

  

  const handleSignIn = async ()=>{
    if(googleSignIn){
    try {
      const res = await googleSignIn() 
      const googleUser = (res as any).user
      console.log("hell",googleUser)
      
     
      const mongoDbUser = await fetchUser(googleUser.uid) //check if the user from google is present in our database
      if(!mongoDbUser){
        await updateUser( {
          userId:googleUser.uid,
          // authProvider:googleUser.providerData,
          // objectId:mongoDbUser?._id,
          // username:userInfo?.username || user?.username,
          name:googleUser?.displayName,
          email:googleUser.email,
          // bio:userInfo?.bio || "",
          // image:userInfo?.image || user?.imageUrl
          
      })
      console.log("created")
      }
      else{
        //  router.push("/book");
        console.log("hello")
      }
    } catch (error) {
      console.log(error)
    }
  }
  }
  const handleSignOut = async (e:any)=>{
    if (logOut) {
      try {
        await logOut();
        // Successfully signed out
      } catch (error) {
        console.error("Error signing out:", error);
      }
    }
  }


  const handleCopyClick = () => {
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        setCopySuccess('Copied!');
      },
      (err) => {
        console.error('Failed to copy: ', err);
        setCopySuccess('Copy failed');
      }
    );
  };

  return (
    <header className=" flex justify-center items-center flex-col space-y-6 w-[93%]">
      
      <nav className="flex flex-col md:flex-row justify-between items-center w-full pt-4 px-10 md:mb-10">
         <div className="flex  flex-row md:flex-col space-x-4 mb-4">
            <img src={logo.src} alt ="1000thingsaboutmelogo" className="w-28 object-contain"/>
            
            <div className="logo-icon-text font-Nabla text-2xl">1000 things about me</div>
        </div> 
        <div className="flex flex-row gap-2">
          <button className="gitHub-btn bg-black text-white rounded-xl p-2" type="button" onClick={()=>{window.open('https://github.com')}}>
                Github
          </button>
          {!user ? (<button className="gitHub-btn bg-orange-500 text-white rounded-xl p-2" type="button" onClick={handleSignIn}>
              GoogleSignIn
          </button>):
          (<button className="gitHub-btn bg-orange-500 text-white rounded-xl p-2" type="button" onClick={handleSignOut}>
            Logout
          </button>)}
        </div>
      </nav>

      <div >
      {user ? (
        <div className="font-bold text-yellow-400 text-2xl">
          <p>Welcome, {user?.displayName}!</p>
        </div>
      ) : (
        <div className="font-bold text-red-600 text-2xl">
          <p>Please SignUp or login</p> 
        </div>
      )}
      {/* Render other components or use context data as needed */}
    </div>
      <h1 className="header-text text-4xl font-bold text-center">
        Get to Know More about Anyone with <br className="max-md:hidden"/>
        <span className="colored-text bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          1000 things about me
        </span>
      </h1>

      <h2 className="description text-center my-2 text-gray-500">
        <i>
        User-generated content drives our product, offering personalized insights into individuals' lives, interests, and perspectives through their written input
        </i>
      </h2>

      <div className="flex flex-row space-x-3">
        {/* <Link href={'/book'}> */}
          {/* <Button text={"Write About Yourself"} /> */}
          <button className='bg-orange-500 text-white rounded-md p-2 font-bold'  onClick={redirectToWrite}>Write About Yourself</button>
        {/* </Link> */}
        {/* <Link href={'/readposts/marketPlace'}> */}
          {/* <Button text = {"Read About Someone"} /> */}
          <button className='bg-orange-500 text-white rounded-md p-2 font-bold'  onClick={redirectToRead}>Read About Someone</button>
        {/* </Link> */}
      </div>


      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <button className="bg-gray-100" onClick={handleCopyClick}>{copySuccess}</button>
            {/* <div>{textToCopy}</div> */}
          </div>
        )}
      </div>
      
    </header>
  )
}

export default Hero