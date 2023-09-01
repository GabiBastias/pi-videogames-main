import BackgoundVideo from '../../components/BackgroundVideo/BackgroundVideo'
import styles from './about.module.css'
import aboutImg from '../../media/pictures/aboutImg.jpeg'
import js from '../../media/pictures/js.png'
import html5 from "../../media/pictures/html-5.png"
import css3 from "../../media/pictures/css-3.png"
import nodejs from "../../media/pictures/nodejs.png"
import react from "../../media/pictures/icons8-react-js-500.png"
const BACKGROUND_TYPE = 'City_Sunset';


const Info = () => {
    return (
        <div className={styles.divInfo}>
            <BackgoundVideo videoType={BACKGROUND_TYPE}/>
            <div className={styles.infoPanel}>
                <h2 className={styles.h2Name}>About me...</h2>
                <div className={styles.bg}></div>
                <div className={styles.divPanelInfo}>
                    <div className={styles.divP}>
                        <p className={styles.paragraph}>Hi, my name is Federico Gabriel Bastias Cano, beginner developer, currently studying in the bootcamp Soy Henry. I am a normal guy living in Tupungato Mendoza, province of Argentina, completely passionate about technology since I can remember. Characterized by a responsible and dedicated behavior, when I have something in mind, persevere to achieve it and make the most of it. My other passions are soccer (a River Plate fan) and good music, nothing in particular. </p>
                        <p className={styles.paragraph}>This is a project that shows you games and you can search for them by name or ID. This API has more than 500,000 games, so feel free to search or create your own game in the "Create" tab. In fact, this is my Individual Project for the bootcamp and I am very happy with the results. The person in the photo is me and below are some technologies used in the project. Thank you very much for visiting my site :)    </p>
                    </div>
                    <div className={styles.aboutProfile}>
                        <img src={aboutImg} alt="Federico Gabriel Bastias Cano" />
                    </div>
                    <div className={styles.divImg}>
                        <h3>Used technologies: </h3>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer noopener">
                            <img src={js} alt="JavaScript" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer noopener">
                            <img src={html5} alt="HTML" />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer noopener">
                            <img src={css3} alt="CSS" />
                        </a>
                        <a href="https://nodejs.org/en" target="_blank" rel="noreferrer noopener">
                            <img src={nodejs} alt="NodeJS" />
                        </a>
                        <a href="https://legacy.reactjs.org/" target="_blank" rel="noreferrer noopener">
                            <img src={react} alt="ReactJS" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;