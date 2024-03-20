import { projectsList } from "../../portfolio-data/projectsList"
import { useParams } from "react-router-dom"

const ProjectDetails = () => {
    const { slug } = useParams()
    const project = projectsList.find((project) => project.slug === slug)

    function openSite() {
        window.open(project.siteURL)
    }

    function openGithub() {
        window.open(project.githubURL)
    }

    return (
        <div className="my-5 py-16">
            {/* header start */}
            <header className="py-[10px] px-[14px] flex  justify-center">
                <div className="flex justify-between px-5">
                    <img 
                        className="max-w-[500px]"
                        src={project.img}
                        alt='project image'
                    />
                    <div className="flex flex-col px-5">
                        
                        <div className="flex flex-col justify-start items-center gap-10">
                            <p className="font-bold text-4xl text-center py-5">{project.name}</p>
                        </div>

                        <div className="flex flex-col gap-5 items-center">
                            <p className="block text-center py-3">{project.subheader}</p>
                        </div>
                        {/* buttons */}
                        <div className="flex flex-row gap-3 py-4">
                            <button 
                                className="border rounded-[15px] leading-4 font-bold uppercase py-2 px-5"
                                onClick={() => openSite()}
                            >
                                Deployed Site
                            </button>

                            <button 
                                className="border rounded-[15px] leading-4 font-bold uppercase py-2 px-5"
                                onClick={() => openGithub()}
                            >
                                Github Repo
                            </button>
                        </div>
                    </div>
                    
                    
                </div>
            </header>
            {/* header end */}
            <div className="max-w-[56rem] flex flex-col items-center gap-9 border border-yellow-600">
                <p className="text-2xl font-bold">
                    Built with
                </p>
                <ul className="gap-7 flex justify-center flex-wrap">
                    <li 
                        className="flex flex-col justify-center items-center gap-2" 
                        key={`project`}
                    >
                        <span className="font-bold text-xl">
                            {project.stacks.toString().split(',').join(', ')}
                        </span>
                    </li>
                </ul>
                <p className="text-center px-8">
                    {project.desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectDetails