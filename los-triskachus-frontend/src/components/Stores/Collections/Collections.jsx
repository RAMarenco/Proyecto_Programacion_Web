import classes from './Collections.module.scss';

import CollectionProduct from './CollectionProducts/CollectionProduct';

const Collections = ({id=""}) => {
    return (
        <div className={ classes["Collections"] }>
            <div className={ classes["Collection-title"]}>
                <h4>
                    Coleccion
                </h4>
                <hr />
            </div>
            <div className={ classes["Collection-products"] }>
                <CollectionProduct/>
                <CollectionProduct/>
                <CollectionProduct/>
                <CollectionProduct/>
                <CollectionProduct/>
                <CollectionProduct/>
                <CollectionProduct/>
            </div>
        </div>
    );
}

export default Collections;