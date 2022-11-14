import classes from './CategoryStores.module.scss';
import StoreCard from '../../Card/StoreCard/StoreCard';

const CategoryStores = ({ Stores = [] }) => {
    const storeCards = Stores.map(store => {
        return <StoreCard key={store.id} id={store.id} Store={store.Store} Image={store.Image}/>
    });
    return (
        <div className={ classes["CategoryStores"] }>
            { storeCards }
        </div>
    );
}

export default CategoryStores;