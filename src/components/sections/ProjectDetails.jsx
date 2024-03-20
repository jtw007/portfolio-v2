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
        <div className="lg:my-5 lg:py-16 xs:pt-[150px]">
            {/* header start */}
            <header className="flex justify-center">
                <div className="flex justify-between lg:px-5 xs:flex-col lg:flex-row">
                    <img 
                        className="lg:max-w-[500px] xs:max-w-[325px] xs:self-center"
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
            <div className="flex flex-col items-center my-3 py-5">
                <div className="lg:max-w-[56rem] gap-9 text-center">
                    <p className="text-2xl font-bold">
                        Built with:
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
                    <p className="text-center px-8 lg:py-2 xs:py-3">
                        {project.desc}
                    </p>
                </div>
                
            </div>

        </div>
    )
}

export default ProjectDetails