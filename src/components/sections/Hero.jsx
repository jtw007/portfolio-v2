import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div className="lg:p-40 xs:py-20 flex flex-col items-center">

            <div className="py-10">
                <h1 className="text-6xl">Josh Wu.dev</h1>
            </div>

            <div className="py-4">
                {/* <h1 className="text-2xl">Frontend Developer</h1> */}
                <span className='lg:text-2xl xs:text-xl'>
                    <Typewriter 
                        words={['Frontend Developer']}
                        loop={0 | false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={70}
                        delaySpeed={1500}
                    />
                </span>
                
            </div>

            <div className="py-4">
                <h1 className="lg:text-2xl xs:text-xl">Let's build something together!</h1>
            </div>

        </div>
    )
}

export default Hero