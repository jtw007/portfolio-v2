import Skills from "../../portfolio-data/Skills"

const About = () => {
    return (
        <div className="flex w-full flex-col xs:my-5 lg:my-16" id='about'>
            <div className="flex py-5 px-7 w-full xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] self-center">
                <h1 className="font-bold text-3xl">About Me</h1>
            </div>
            {/* about and photo container */}
            <div className="flex lg:flex-row xs:flex-col items-center self-center justify-around m-7 xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px]">

                <img className="rounded-full shadow-2xl mx-5 my-2 max-w-[400px] xs:max-w-[300px]" src='../../../photo-assets/profilePicture1.png' alt='photo of me'/>

                <div className="">
                    <p className="text-xl py-1 xs:text-base">
                        Hello there! My name is Josh and I am a front-end software developer (and a sneaker enthusiast) from Southern California. My interest in web development began when I started exploring some modules on FreeCodeCamp and The Odin Project out of curiosity. This ultimately set me on a path of continuous learning and growth in the exciting and ever-evolving field of web development.
                    </p>
                    <p className="text-xl py-1 xs:text-base">
                        As a web developer, I value sincerity and empathy and I take pride in having a resourceful and straightforward approach when problem solving. My core values of sincerity and empathy guide me to take a resourceful and straightforward approach when problem solving, and I thrive in collaborative environments that encourage open communication and diverse perspectives. In the long run, I aspire to drive meaningful change and inspire others to reach their full potential.
                    </p>
                </div>

            </div>
            {/* skills container */}
            <div className="w-full xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] self-center">
                <p className="flex justify-center text-2xl">Current Stack 📚</p>
                <Skills />
            </div>

        </div>
    )
}

export default About