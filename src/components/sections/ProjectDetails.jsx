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
        <div className="">
            {/* header start */}
            <header className="">
                <div className="">
                    <img 
                        className=""
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
                            className=""
                            onClick={() => openSite()}
                        >
                            Deployed Site
                        </button>

                        <button 
                            className=""
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
            </div>
        </div>
    )
}

export default ProjectDetails