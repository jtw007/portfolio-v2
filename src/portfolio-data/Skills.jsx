import '../index.css'

const Skills = () => {
    return (
        <div className="border border-red-500 lg:flex lg:flex-row xs:grid xs:grid-cols-3 my-5 xs:place-items-center">

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-html5-plain colored text-2xl"></i>
                <div className=''>
                    <p>HTML5</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-css3-plain colored text-2xl"></i>
                <div className=''>
                    <p>CSS3</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-javascript-plain colored text-2xl"></i>
                <div className=''>
                    <p>JavaScript</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-react-original colored text-2xl"></i>
                <div className=''>
                    <p>ReactJS</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
            <i className="devicon-vitejs-plain colored text-2xl"></i>
                <div className="">
                    <p>ViteJS</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-tailwindcss-plain colored text-2xl"></i>
                <div className=''>
                    <p>TailwindCSS</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-bootstrap-plain colored text-2xl"></i>
                <div className=''>
                    <p>Bootstrap</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-express-original text-2xl"></i>
                <div className=''>
                    <p>Express</p>
                </div>
            </div>

            <div className='border border-black-500 flex justify-center items-center flex-col text-[15px] h-[110px] w-[110px] rounded-full my-2'>
                <i className="devicon-nodejs-plain colored text-2xl"></i>
                <div className=''>
                    <p>Node.js</p>
                </div>
            </div>



        </div>
    )
}

export default Skills