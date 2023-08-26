import { CheckCircle } from 'lucide-react';
import React from 'react'

const Thanks = () => {
  return (
    <div className="bg-green-500 h-[100vh] flex flex-col items-center justify-center text-center">
      <div className="text-white">
      <CheckCircle className='w-20 h-20 m-[auto]' />
        <h1 className='text-4xl font-bold'>Order Successfully Placed!</h1>
        <p className='text-2xl py-2'>Your payment was successful, and your order has been placed.</p>
        <p className='text-2xl'>Thank you for shopping with us!</p>
      </div>
    </div>
  )
}

export default Thanks;