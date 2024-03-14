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
        <div className="my-5">
            {/* header start */}
            <header className="py-[10px] px-[14px]">
                <div className="max-w-[72rem] flex flex-row justify-between">
                    <img 
                        className="max-w-[500px]"
                        src={project.img}
                        alt='project image'
                    />

                    <div className="">
                        <h1 className="">{project.name}</h1>
                    </div>

                    <div className="">
                        <h2 className="">{project.subheader}</h2>
                    </div>
                    {/* buttons */}
                    <div className="">
                        <button 
                            className="border"
                            onClick={() => openSite()}
                        >
                            Deployed Site
                        </button>

                        <button 
                            className="border"
                            onClick={() => openGithub()}
                        >
                            Github Repo
                        </button>
                    </div>

                </div>
            </header>
            {/* header end */}
            <div className="">
                <h3 className="">
                    Built with
                </h3>
                <ul className="">
                    <li className="" key={`project`}>
                        <span className="">
                            {project.stacks.toString().split(',').join(', ')}
                        </span>
                    </li>
                </ul>
                <p className="">
                    {project.desc}
                </p>
            </div>
        </div>
    )
}

export default ProjectDetails