import { projectsList } from '../../portfolio-data/projectsList.js'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div className='flex w-full flex-col xs:my-5 lg:my-16 border border-blue-400' id='projects'>

            <div className="flex py-5 px-7 w-full xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] self-center">
                <h1 className="font-bold text-3xl">JoshWu.Projects</h1>
            </div>

            <div className='w-full xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] self-center flex lg:flex-row border border-red-500'>
                {projectsList.map((project, idx) => {
                    return (
                        <Link key={`projects-${idx}`} to={`/${project.slug}`}> 
                            <div className='flex flex-row justify-center items-center bg-no-repeat bg-center bg-cover h-[300px] w-[500px]' style={{backgroundImage:`url(${project.img})`}}
                            >
                                <span className=''>
                                    {project.name}
                                </span>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Projects