import { projectsList } from '../../portfolio-data/projectsList.js'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Projects = () => {
    const [ style, setStyle ] = useState({})

    return (
        <div className='flex w-full flex-col xs:my-5 lg:my-16' id='projects'>

            <div className="flex py-5 px-7 w-full xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] self-center">
                <h1 className="font-bold text-3xl">JoshWu.Projects</h1>
            </div>

            <div className='w-full xs:max-w-[330px] sm:max-w-[375px] md:max-w-[1000px] lg:max-w-[1200px] xl:max-w-[1500px] self-center flex lg:flex-row lg:justify-center md:flex-row md:justify-center md:px-2 xs:flex-col xs:items-center xs:py-5'>
                {projectsList.map((project, idx) => {
                    return (
                        <Link key={`projects-${idx}`} to={`/${project.slug}`} className=' group'> 
                            <div className='flex flex-row justify-center items-center bg-no-repeat bg-center bg-cover xl:h-[300px] xl:w-[500px] xl:mx-5 lg:mx-5 md:h-[200px] md:w-[350px] md:my-3 md:mx-2 xs:h-[200px] xs:w-[320px] xs:my-2 xl:group-hover:opacity-75' style={{backgroundImage:`url(${project.img})`}}
                            >
                                <span className='lg:hidden xs:hidden xl:group-hover:inline xl:text-xl'>
                                    {project.name}
                                </span>
                            </div>
                            <div className='xl:hidden xs:flex xs:justify-center'>
                                {project.name}
                            </div>
                        </Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Projects