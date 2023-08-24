import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDev } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function ProjectBox({
    title,
    img,
    description,
    techstack1,
    techstack2,
    code,
    demo,
    scrollY,
    cName,
    icon,
}) {
   
   /* const [scroll, setScroll] = useState(false); */

    return (
        <>
        <div className={`proj pro_1 ${cName}`}>
            <div className="project-img">
                <a target="_blank" href={demo} rel="noreferrer">
                    <img 
                    src={img}
                    alt="website"
                    /*style={{
                        transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                        transition: "transform 10s ease-in-out",
                    }} 
                    onMouseEnter={() => setScroll(true)}
                    onMouseMove={() => setScroll(false)} */
                    />
                </a>
            </div>
            <div className="projectbox-text">
                <h3>
                    {title} {icon}
                </h3>
                <p>{description}</p>
                <div className="stack">
                    <p>{techstack1}</p>
                    <p>{techstack2}</p>
                </div>
                <div className="links">
                    <a target="_blank" href={code} rel="noreferrer">
                        Code 
                        <FontAwesomeIcon icon={faGithub} size='2x' />
                    </a>
                    <a target="_blank" href={demo} rel="noreferrer">
                        Demo 
                        <FontAwesomeIcon icon={faDev} size='2x' />
                    </a>
                </div>
            </div>
        </div>
        
        </>
    )
}


export default ProjectBox;