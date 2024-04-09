import githubIcon from '../../../public/icons/github.png'
import linkedInIcon from '../../../public/icons/linkedin.png'

const Contact = () => {
    return (
        <div className="my-5 py-5" id='contact'>
            <div className="">
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl">Connect with me!</h1>
                </div>
                <div className="flex justify-center">
                    <img src={githubIcon} className=''/>
                    <img src={linkedInIcon} className=''/>
                </div>
            </div>
            
        </div>
    )
}

export default Contact