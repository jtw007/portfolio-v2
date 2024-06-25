import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact"
import NavBar from "../NavBar";

const Home = () => {
    return (
        <div className='body'>
            <NavBar />
            {/* <Hero /> */}
            <About /> 
            <Projects />
            <Contact />
        </div>
    )
}

export default Home