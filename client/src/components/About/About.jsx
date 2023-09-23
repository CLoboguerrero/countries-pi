import './About.modules.css';
//import imgabout from '../../images/imgabout.jpg'

const About = () => {

    return (
        <div className='about-page'>
            <h1>ABOUT</h1>
            <div className="about-container">
                <div className="about-text">
                    <p>
                    Hi, I'm Carlos Loboguerrero, an Automotive Engineer on a journey to master Full Stack Web Development. I've been immersed in the world of web development since 2018 in the WordPress platform. This experience has honed my skills in HTML and CSS, setting a strong foundation for my web development journey.
                    </p>
                    
                    <p>    
                    Recently, I've delved into the exciting realms of JavaScript and React, dedicating the past two months to expand my knowledge and capabilities. I'm thrilled to share my newfound expertise with others and embark on collaborative projects.
                    </p>
                    
                    <p>
                    If you're interested in connecting, feel free to drop me an email or connect with me on LinkedIn. I'm always eager to explore opportunities for collaborative work. Let's create something great together!
                    </p>
                    
                    <p>
                    <span style={{ fontWeight: 'bold'}}>email: c.loboguerrero@outlook.com</span>
                    <br /> 
                    <span style={{ fontWeight: 'bold'}}>LinkedIn: www.linkedin.com/in/carlos-loboguerrero</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default About;