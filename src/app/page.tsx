"use client";
    import Hero from '../components/Hero';
    import Skills from '../components/Skills';
     import Contact from '../components/Contact';
     import About from '../components/About';
     import Projects from '../components/Projects';
     

    
    
    
    
    export default function Home() {


        return(
            <main>
              <Hero />  
              
            <About/>
            <Projects/>
            <Skills />
            <Contact /> 
    
            
         
            </main>
        );
    }