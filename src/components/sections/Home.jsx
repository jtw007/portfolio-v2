import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
    return (
        <div className='body'>
            <Hero />
            <About /> 
            <Projects />
        </div>
    )
}

export default Home