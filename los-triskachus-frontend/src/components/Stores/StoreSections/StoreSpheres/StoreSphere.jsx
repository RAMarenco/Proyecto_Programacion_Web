import classes from './StoreSphere.module.scss';

import { Link } from 'react-router-dom';

const StoreSphere = ({ Store = [], extraClass="" }) => {
    return (
        <Link to={Store  ? `/Stores/Store/${Store.id}/${Store.Store}` : ""} className={ extraClass ? `${classes["StoreSphere"]} ${classes[extraClass]}` : classes["StoreSphere"] }>        
            <img src={Store.Image} alt={Store.Store} />
        </Link>
    );
};

export default StoreSphere;