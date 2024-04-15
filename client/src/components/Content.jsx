import React from 'react'

export default function Content() {
  return (
    <div className='text-center mx-auto pt-[50px] lg:w-[630px] sm:w-[350px]'>
    <h1 className='font-bold text-[25px]'>Please verify your email...</h1>
    <li className='fa fa-envelope text-5xl'></li>
    <p className='pt-4'>Please verify your eamil address. We've sent a confirmation email to:</p>
    <p className='pt-4 font-bold'>account@refero.design</p>
    <p className='pt-4'>Click the confirmation link in that email to begin using Dribbble.</p>
    <p className='pt-4'>Didn't receive the email? Check your Spam folder,it may have been caught by a filter.If you still don't see it,you can <span className='text-pink-500'>resend confirmation email</span></p>
    <p className='pt-4'>Wrong email address? <span className='text-pink-500'>Change it.</span></p>
</div>
  )
}

