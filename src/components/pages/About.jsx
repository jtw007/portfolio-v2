
const About = () => {
    return (
        <div className="flex xs:items-center w-full flex-col my-16 border border-green-500">
            <h1 className="ml-7 my-5 flex self-start font-bold text-3xl border border-blue-300">About Me</h1>

            <div className="flex lg:flex-row xs:flex-col items-center justify-around mx-7 xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] border border-red-500">
                <div className="">
                    <img className="rounded-full relative p-5 xs:width-55vw md:max-w-[400px]" src='../../../photo-assets/profilePicture1.png' alt='photo of me'/>
                </div>

                <div className="">
                    <div className="">
                        <p className="">
                            Hello there! My name is Josh and I am a front-end software developer (and a sneaker enthusiast) from Southern California. My interest in web development began when I started exploring some modules on FreeCodeCamp and The Odin Project out of curiosity. This ultimately set me on a path of continuous learning and growth in the exciting and ever-evolving field of web development.<br />
                            As a web developer, I value sincerity and empathy and I take pride in having a resourceful and straightforward approach when problem solving. My core values of sincerity and empathy guide me to take a resourceful and straightforward approach when problem solving, and I thrive in collaborative environments that encourage open communication and diverse perspectives. In the long run, I aspire to drive meaningful change and inspire others to reach their full potential.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About