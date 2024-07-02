import React from 'react'
import { DiAngularSimple, DiAppstore, DiCss3Full, DiHtml5, DiJava, DiJavascript, DiReact, DiTravis } from "react-icons/di";

const Tech = () => {
  return (
    <div className='space-y-5'>
      <h1 className='text-3xl font-semibold text-center'>Technologies I use</h1>

      <div className="tech-icons grid grid-cols-4 justify-items-center gap-y-4">
        <DiHtml5 size={200} />
        <DiJava size={200} />
        <DiCss3Full size={200} />
        <DiReact size={200} className='animate-bounce' />
        <DiAngularSimple size={200} className='hover:scale-110 hover:text-pink-700 transition-all ' />
        <DiJavascript size={200} />
        <DiTravis size={200} />
        <DiAppstore size={200} />
      </div>

    </div>
  )
}

export default Tech