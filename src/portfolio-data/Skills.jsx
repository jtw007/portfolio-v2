import '../index.css'

const Skills = () => {
    return (
        <div className="border border-red-500 lg:flex lg:flex-row xs:grid xs:grid-cols-5">

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-html5-plain colored"></i>
                <div className=''>
                    <p>HTML5</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-css3-plain colored"></i>
                <div className=''>
                    <p>CSS3</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-javascript-plain colored"></i>
                <div className=''>
                    <p>JavaScript</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-react-original colored"></i>
                <div className=''>
                    <p>ReactJS</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <img className="" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                <div className="">
                    <p>ViteJS</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-tailwindcss-plain colored"></i>
                <div className=''>
                    <p>Tailwind CSS</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-bootstrap-plain colored"></i>
                <div className=''>
                    <p>Bootstrap</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-express-original"></i>
                <div className=''>
                    <p>Express</p>
                </div>
            </div>

            <div className='icons-box border border-blue-300 flex justify-center items-center flex-col text-[20px'>
                <i className="devicon-nodejs-plain colored"></i>
                <div className=''>
                    <p>Node.js</p>
                </div>
            </div>



        </div>
    )
}

export default Skills