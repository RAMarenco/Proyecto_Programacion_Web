import classes from './StoreSphere.module.scss';

import { Link } from 'react-router-dom';

const StoreSphere = ( {Store = []} ) => {
    return (
        <Link to={Store  ? `/Stores/Store/${Store.id}/${Store.Store}` : ""} className={ classes["StoreSphere"] }>        
            <img src={Store.Image} alt={Store.Store} />
        </Link>
    );
};

export default StoreSphere;