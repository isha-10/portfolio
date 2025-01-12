import React from 'react'

const Skills = () =>{
  return(
<section id="Skills" className="py-16">
<div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">MY SKILLS</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-pink-800 p-6 rounded shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">HTML & CSS</h3>
            <p>Creating structured and styled layouts.</p>
        </div>
        <div className="bg-pink-800 p-6 rounded shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2" >Typescript</h3>
            <p>Building dynamic interactions and applications.</p>
        </div>
        <div className="bg-pink-800 p-6 rounded shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">Next.js</h3>
            <p>Developing powerful single-page applications.</p>
        </div>
    </div>
</div>
</section>
  )
}


export default Skills