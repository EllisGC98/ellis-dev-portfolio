import '../App.css';
import WorkingDev from '../assets/grad.jpg';

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
                        <h4> Belfast Based, Front-End Developer 👨‍💻
                        </h4>
                            <p>
                                I'm Ellis, a Computer Science graduate from Ulster University, specializing in Front-End React development. I have a genuine passion for crafting smooth and immersive user experiences that seamlessly merge technology with creativity.
                            </p>
                            <p>
                                Currently engaged in production support within the financial sector, I dedicate my spare time to front-end development. Notably, I've successfully built and sold out my own NFT project, showcasing my deep interest in the web3 space.
                            </p>
                            <p>
                                Outside the coding arena, I'm a freedom seeker and avid traveler, always on the lookout for new experiences to fuel my creative spark.
                            </p>
                    </div>
                </div>
             </div>
            </section>

        </div>
    )
}

export default About;