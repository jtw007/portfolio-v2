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
            <header className="py-[10px] px-[14px] flex justify-center border border-red-500">
                <div className="max-w-[72rem] flex flex-row justify-between border border-blue-500">
                    <img 
                        className="max-w-[500px]"
                        src={project.img}
                        alt='project image'
                    />

                    <div className="flex flex-col justify-start items-center gap-10">
                        <p className="bold text-4xl text-center">{project.name}</p>
                    </div>

                    <div className="flex flex-col gap-5 items-center">
                        <p className="block text-center">{project.subheader}</p>
                    </div>
                    {/* buttons */}
                    <div className="flex flex-row gap-3 ">
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
            </header>
            {/* header end */}
            <div className="max-w-[56rem] flex flex-col items-center gap-9">
                <p className="text-2xl font-bold">
                    Built with
                </p>
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