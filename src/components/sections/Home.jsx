import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact"

const Home = () => {
    return (
        <div className='body'>
            <Hero />
            <About /> 
            <Projects />
            <Contact />
        </div>
    )
}

export default Home