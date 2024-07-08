import { faker } from '@faker-js/faker';
import React, { useState } from 'react'
import ProfileCard from '../components/ProfileCard';


const Home = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);



  const handleIncre = () => {
    setCount((prev) => prev + 1);
    console.log(faker.internet.email());
    console.log(faker.internet.userName());
    console.log(faker.image.avatarLegacy());
  }



  return (
    <div>
      <ProfileCard />


      <p>{count % 2 === 0 ? `even number ${count}` : `odd number ${count}`}</p>

      <button onClick={handleIncre}>AddVal</button>




    </div>
  )
}

export default Home