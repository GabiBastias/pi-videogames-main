import { Link } from 'react-router-dom';
import delorean from '../../media/pictures/c9b7d554678d7973a65325cc14a6fe-unscreen.gif'

const Delorean = () => {
    return(
        <Link to='/'>
            <img style={{height: '100px'}} src={delorean} alt='Delorean'/>
        </Link>
    )
}

export default Delorean;