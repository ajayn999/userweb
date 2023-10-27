"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import './profile.css'
import Link from "next/link";

const Login = () => {
  const { data: session } = useSession(); // Use destructuring to access the session data
  console.log(session)
  return (
    <div>
      <div className="container">
        {session ? (
          <div className="profile-page">
            <h1>Profile Details</h1>
            <h1>this is heading</h1>
            <h2>Welcome, {session.user.name}!</h2>
            <h3>Your Email ID is : {session.user.email}!</h3>
            <br />
            <img
              src={session.user.image}
              alt="img"


            />
            <Link href='/about'>dashboard</Link>

            <button onClick={() => signOut("google")}>Sing out</button>
          </div>
        ) : (
          <div className="login-container">
            <h2>Login with only Google Account</h2>
            <button  onClick={() => signIn("google")}>Log In </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;