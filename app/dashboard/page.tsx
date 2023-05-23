'use client';

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {app } from "../firebase/firebaseApp"

import Link from "next/link";
export default function Dashboard(){
    const auth=getAuth(app);
    const [user, loading]=useAuthState(auth)
    console.log(user)
    if(loading){
        return <div>loading...</div>
    }

    
    return(
        <div className="dashboard">
            <h2 className="title">welcome to dashboard</h2>
            {user  && (
                <Link href="/" onClick={()=>auth.signOut()}>Sign Out</Link>
            )}
        </div>
    )
}