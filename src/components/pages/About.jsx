
const About = () => {
    return (
        <div className="flex justify-center flex-col mt-5">
            <h1 className="ml-5 justify-center font-bold text-3xl">About Me</h1>

            <div className="flex lg:flex-row xs:flex-col items-center justify-around border border-red-500">
                <div className="">
                    <img className="rounded-full relative" src='../../../photo-assets/profilePicture1.png' alt='photo of me'/>
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