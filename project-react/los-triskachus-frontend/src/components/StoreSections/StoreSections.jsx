import classes from './StoreSections.module.scss';

import StoreSphere from './StoreSpheres/StoreSphere';

const StoreSections = ({ Category = "", Stores = [] }) => {    
    const StoresData = Stores.map(Store => {
        return (
            <StoreSphere key={Store.Store} Store={Store.Store}/>
        );        
    })
    return (
        <div className={ classes["StoreSections"] }>
            <div className={ classes["Category-Title"] }>
                <div className={ classes["Title"] }>
                    <h2>
                        { Category }
                    </h2>
                </div>
                <div className={ classes["Line"] }></div>
            </div>
            <div className={ classes["Stores"] }>
                <div className={ classes["Stores-Spheres"] }>
                    { StoresData }
                </div>
            </div>
        </div>
    );
}

export default StoreSections;