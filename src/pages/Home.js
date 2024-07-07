import React from 'react'
import LikesComments from '../components/LikesComments'

const Home = () => {
  return (
    <div className='max-w-sm'>

      <h1>Download as a King from all major filehosters with one premium account</h1>
      <img src="https://sanet.pics/images/linkifier_purple.jpg" alt="" />

      <LikesComments like={2000} />
    </div>
  )
}

export default Home