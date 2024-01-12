import '../App.css';
import ProjectBox from '../components/ProjectBox';
import dApp from '../assets/MintPage.PNG';
import NFTWeb from '../assets/OddOrcsWeb.PNG';
import Inspire from '../assets/InspireSS.png';
import SmartContract from '../assets/SC.png';



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
                        demo="https://oddorcsmint.netlify.app/"
                        scrollY="-83%"
                        icon=""
                        />
                        <ProjectBox
                        title="NFT Project"
                        img={NFTWeb}
                        description="A NFT project landing page website for Odd Orcs built using React. Backend implements a node.js express server that uses axios to post data from the contact form"
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
                        <ProjectBox
                        title="ERC-721A Smart Contract"
                        img={SmartContract}
                        description="ERC-721A Smart Contract coded using Solidty for an NFT collection of 7,777. "
                        techstack1="Solidity"
                        techstack2="Ethereum"
                        code="https://etherscan.io/address/0x6eb31d885281d2c980b795ecb387ad015f307d7a#code"
                        demo="https://etherscan.io/address/0x6eb31d885281d2c980b795ecb387ad015f307d7a#code"
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