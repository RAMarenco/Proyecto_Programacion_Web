import classes from './Store.module.scss';

import { useParams } from 'react-router-dom';

const Store = () => {
    const {id, Store} = useParams();

    return (
        <>
            <p>id: {id}</p>
            <p>Tienda: {Store}</p>
        </>
        
    );
}

export default Store;