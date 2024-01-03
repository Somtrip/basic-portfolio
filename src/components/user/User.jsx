import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-3xl  text-white  bg-green-500 m-5 p-10 rounded-2xl'>User: {userid} </div>
  )
}

export default User