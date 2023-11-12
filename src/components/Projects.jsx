import '../App.css';
import ProjectBox from './ProjectBox';
import dApp from '../assets/MintPage.PNG';
import NFTWeb from '../assets/OddOrcsWeb.PNG';
import Inspire from '../assets/InspireSS.png';



function Projects() {

    return (
        <>
        <section className='project' id='projects'>
            <div className='container'>
                <div className='project-content'>
                    <p>Portfolio</p>
                    <h3>Projects</h3>
                    <div className='projects-grid'>
                        <ProjectBox
                        title="NFT Minting dApp"
                        img={dApp}
                        description="A NFT collection minting dApp that acts as an interface & enables users to buy tokens directly from a smart contract deployed on the Ethereum blockchain."
                        techstack1="React"
                        techstack2="Solidity"
                        code="https://github.com/EllisGC/odd-orc-minter"
                        demo="https://oddorcsmint.io/"
                        scrollY="-83%"
                        icon=""
                        />
                        <ProjectBox
                        title="NFT Project"
                        img={NFTWeb}
                        description="A NFT project landing page website for Odd Orcs."
                        techstack1="React"
                        techstack2="Express.js"
                        code="https://github.com/EllisGC/odd-orc-minter"
                        demo="https://oddorcs.io/"
                        scrollY="-83%"
                        icon=""
                        />
                        <ProjectBox
                        title="Inspire Male Image"
                        img={Inspire}
                        description="A React JS website for Inspire Male Image which utilises React-router-dom for a multi page approach. "
                        techstack1="React"
                        techstack2="JavaScript"
                        code="https://github.com/EllisGC98/inspiremaleimageweb"
                        demo="https://inspiremaleimage.netlify.app/"
                        scrollY="-83%"
                        icon=""
                        />

                    </div>
                </div>
            </div>
        </section>
        
        
        
        
        </>
    )
}

export default Projects;