import styles from './backgroundVideo.module.css'
import video from '../../media/video/Beyond_Sunset.mp4'

const BackgroundVideo = () => {
    return(
        <div>
            <video className={styles.videoBackground} loop autoPlay muted>
                <source src={video}/>
            </video>
        </div>
    )
}

export default BackgroundVideo;