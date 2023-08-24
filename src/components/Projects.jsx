import '../App.css';
import ProjectBox from './ProjectBox';
import dApp from '../assets/MintPage.PNG';
import NFTWeb from '../assets/OddOrcsWeb.PNG';



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

                    </div>
                </div>
            </div>
        </section>
        
        
        
        
        </>
    )
}

export default Projects;