import React from 'react'
interface propstype{
    title:string
}
const Heading : React.FC <propstype> =({title}) => {
  return (
    <div className='text-center text-4xl p-8'>
        <p className='border-b-4 inline-block pb-2'>{title}</p>
    </div>
  )
}

export default Heading