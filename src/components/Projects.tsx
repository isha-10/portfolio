import React from "react"
import Heading from "../components/Heading"
import  Card from"../components/Card"

    const data =[
        {
            id:"0",
             title:"Static resume builder",
            img:"/image2.png",
            tags:["HTMl CSS  TYPESCRIPT"],
        },
        {
            id:"1",
             title:"TO-DO list",
            img:"/image1.png",
            tags:["HTML CSS  TYPESCRIPT"],
        },
        {
            id:"2",
             title:"Simple Calculator",
            img:"/image3.png",
            tags:["HTML CSS TYPESCRIPT"],
        },
    ]
    
    
    const projects = () => {
      return (
        <div id="Projects" className="container pt-32 font-bold mb-8">
        <Heading title="My Projects" />
        <div className="grid gap-10 xl-gap-0 xl-gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
        </div>
      )
    }
    
    export default projects
