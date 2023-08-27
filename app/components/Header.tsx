import { UserButton, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const {userId} = auth()
  console.log(userId)
  return (
    <>
    <nav className='bg-blue-700 py-4 px-6 flex items-center mb-5 justify-between'>
      <div>
    <Link href="/" className='text-white font-semibold'>
    Clerk app
    </Link>
      </div>
      <div className='flex gap-3 text-white'>
        {!userId && (
          <>
           <Link href="sign-in">
      Sign in
    </Link>
    <Link href="sign-up">
      Sign up
    </Link>

          </>
        )}

 

   
    </div>
    {userId && (
      <>
      <Link href="profile">
        Profile

      </Link>
      </>
    )}
    <UserButton afterSignOutUrl='/'/>


    </nav>

    </>
  )
}

export default Header