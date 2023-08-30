import styles from './backgroundVideo.module.css'
import Beyond_Sunset from '../../media/video/Beyond_Sunset.mp4';
import On_the_City from '../../media/video/On_the_City.mp4';
import Red_Skull from '../../media/video/Red_Skull.mp4';
import Beach from '../../media/video/Beach.mp4'
import Beach_Night from '../../media/video/Beach_Night.mp4'
import Beyond_Mountain from '../../media/video/Beyond_Mountain.mp4'
import City_Sunset from '../../media/video/City_Sunset.mp4'
import Mall_Japan from '../../media/video/Mall_Japan.mp4'
import Volcano from '../../media/video/Volcano.mp4'

import { useEffect, useState } from 'react'

const BackgroundVideo = ({videoType}) => {
    const [video, setVideo] = useState(null);
    const random = [Mall_Japan, Beach, Volcano];
    const indexRandom = Math.floor(Math.random()*random.length);
    
    useEffect(() => {
        if (videoType === 'Beyond') setVideo(Beyond_Sunset);
        else if (videoType === 'City') setVideo(On_the_City);
        else if (videoType === 'Skull') setVideo(Red_Skull);
        else if (videoType === 'Beach') setVideo(Beach);
        else if (videoType === 'Beach_Night') setVideo(Beach_Night);
        else if (videoType === 'Beyond_Mountain') setVideo(Beyond_Mountain);
        else if (videoType === 'City_Sunset') setVideo(City_Sunset);
        else if (videoType === 'Mall_Japan') setVideo(Mall_Japan);
        else if (videoType === 'Volcano') setVideo(Volcano);
        else if (videoType === 'swap') setVideo(random[indexRandom])
    },[videoType, indexRandom]);

    return(
        <div className={styles.videoContainer}>
            <video className={styles.videoBackground}  loop autoPlay muted>
                <source src={video}/>
            </video>
        </div>
    )
}

export default BackgroundVideo;