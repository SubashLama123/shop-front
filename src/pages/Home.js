import React from 'react'


const Home = () => {

  const numbers = [22, 44, 55, 66, 77];

  return (
    <div>

      {numbers.map((e, i) => {

        return <h1 key={i}>{`hello ${e} sjadsan sjd sdjf`}</h1>
      })}

      <h1>This is Home Page</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi cupiditate blanditiis aut sit? Qui velit ea nulla dolorem saepe a laboriosam, odit dignissimos beatae neque aliquid iusto culpa deserunt esse.</p>
      <p>-------------------------------------------------------------------------------</p>



    </div>
  )
}

export default Home