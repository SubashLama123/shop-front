import React from 'react'
import { FaComment, FaLinkedin } from "react-icons/fa";
const LikesComments = ({ like }) => {
  return (
    <div className='flex justify-end space-x-4'>
      <div className="d flex items-end">
        <h1>{like}</h1>
        <FaLinkedin size={30} />
      </div>

      <FaComment />


    </div>
  )
}

export default LikesComments