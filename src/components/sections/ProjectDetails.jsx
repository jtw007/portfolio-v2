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
            <header className="">
                <div>
                    <img 
                        className=""
                        src={project.img}
                        alt='project image'
                    />
                </div>
            </header>
        </div>
    )
}

export default ProjectDetails