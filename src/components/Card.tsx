import React from 'react'
interface propstype{
    title:string,
    img:string,
    tags:string[],
}
const Card:React.FC<propstype>= ({title,img,tags}) =>{ 
    
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]' >
 <div>
    <img className='w-[300px] sm:w-[350px] h-auto'
   src={img}
  width={350}
    height={350}
    alt={title}
    />
    </div>

    <div className='p-4 space-x-4'>
        <div className='text-4xl font-extralight'>{title}</div>
        <div>
            {tags.map((el =>(<div className='tags' key={el}>
                {el}
            </div>)))}
        </div>
    </div>
    </div>
    
  )
}

export default Card