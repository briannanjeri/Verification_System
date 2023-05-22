'use client'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/navigation';
import {useAuthState} from "react-firebase-hooks/auth"
import { initFirebase } from "./firebase/firebaseApp";
import "./globals.css"

export default function(){
    const app=initFirebase();
    console.log(app)
    const router=useRouter();


    const provider= new GoogleAuthProvider();
    const auth=getAuth()
    const [user, loading]=useAuthState(auth)

    console.log("user:",user)
    console.log(loading)

    if(loading){
        return <div>loading...</div>
    }


    const signIn=async()=>{
        try{
            const result=await signInWithPopup(auth, provider)
            console.log("result :",result.user)
            if(result.user){
              router.push("/dashboard")
          }
        }catch(error){
          if(error instanceof Error){
            console.log(error.message)
          }
        }
    }
    return(
        <div className="signIn">
            <div className="title">Access granted upon sign-in</div>
            <button onClick={signIn}>sign In</button>
        </div>
     
    )
}

