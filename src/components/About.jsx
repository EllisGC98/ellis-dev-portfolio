import '../App.css';
import WorkingDev from '../assets/webdev.jpeg';

function About() {
    return (
        <div>
            <section className='about' id='about'>
                <div className='container'>
                <div className='about-content'>
                    <div className='about-images'>
                        <img src={WorkingDev} alt='dev' className='about-image_workingdev'>

                        </img>

                    </div>
                    <div className='about-text'>
                        <h3>About Me</h3>
                        <h4> Belfast based Front-End Developer
                            <br />
                            with a passion for Web3. 👨‍💻
                        </h4>
                        <p>
                        Hey, I'm Ellis, a Computer Science graduate from Ulster University with a knack for Front-End React development. I thrive on crafting seamless user experiences that blend technology and creativity.
                       <br></br> Passionate about the potential of web3 and blockchain, I'm drawn to the decentralized future they promise. 
                       <br></br>When I'm not coding, I'm a freedom seeker and traveler, exploring new horizons to fuel my creativity


                        </p>

                    </div>
                </div>
             </div>
            </section>

        </div>
    )
}

export default About;