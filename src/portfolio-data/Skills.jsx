import '../index.css'

const Skills = () => {
    return (
        <div className="xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] xs:grid xs:grid-cols-3 my-5 xs:place-items-center lg:grid-cols-5 lg:items-center lg:px-5 xl:items-center xl:justify-between xl:px-5 xl:flex xl:flex-row">

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-html5-plain colored text-2xl"></i>
                <div className=''>
                    <p>HTML5</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-css3-plain colored text-2xl"></i>
                <div className=''>
                    <p>CSS3</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-javascript-plain colored text-2xl"></i>
                <div className=''>
                    <p>JavaScript</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-react-original colored text-2xl"></i>
                <div className=''>
                    <p>ReactJS</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
            <i className="devicon-vitejs-plain colored text-2xl"></i>
                <div className="">
                    <p>ViteJS</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-tailwindcss-plain colored text-2xl"></i>
                <div className=''>
                    <p>TailwindCSS</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-bootstrap-plain colored text-2xl"></i>
                <div className=''>
                    <p>Bootstrap</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-express-original text-2xl"></i>
                <div className=''>
                    <p>Express</p>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2 shadow-xl lg:hover:scale-125 lg:duration-500'>
                <i className="devicon-nodejs-plain colored text-2xl"></i>
                <div className=''>
                    <p>Node.js</p>
                </div>
            </div>



        </div>
    )
}

export default Skills