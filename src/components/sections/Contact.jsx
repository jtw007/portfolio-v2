import githubIcon from '../../../public/icons/github.png'
import linkedInIcon from '../../../public/icons/linkedin.png'

const Contact = () => {
    return (
        <div className="my-5 py-5" id='contact'>
            <div className="">
                <div className="flex justify-center">
                    <h1 className="font-bold text-3xl">Connect with me!</h1>
                </div>
                <div className="flex justify-center my-2">
                    <a href='https://github.com/jtw007' target='_blank' rel='noopener noreferrer'>
                        <img 
                            src={githubIcon} 
                            role='button'
                            className='h-[50px] w-[50px] mx-5 lg:hover:scale-125 lg:duration-500'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/joshwudev/' target='_blank' rel='noopener noreferrer'>
                        <img 
                            src={linkedInIcon} 
                            role='button'
                            className='h-[50px] w-[50px] mx-5 lg:hover:scale-125 lg:duration-500'
                        />
                    </a>
                        
                </div>
            </div>
            
        </div>
    )
}

export default Contact