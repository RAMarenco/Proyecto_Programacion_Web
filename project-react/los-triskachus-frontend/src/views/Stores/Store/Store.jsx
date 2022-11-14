import classes from './Store.module.scss';

import { useParams } from 'react-router-dom';
import { useOutlet, Outlet } from 'react-router-dom';

import StoreSphere from '../../../components/Stores/StoreSections/StoreSpheres/StoreSphere';
import Collections from '../../../components/Stores/Collections/Collections';

const Store = () => {
    const {id, Store} = useParams();
    const outlet = useOutlet();

    return (
        <>
            { outlet ? <Outlet/> : 
                <div className={ classes["Store"] }>
                    <div className={ classes["Store-Header"] }>
                        <div className={ classes["Store-Logo"] }>
                            <StoreSphere extraClass="small"/>
                        </div>
                        <div className={ classes["Store-Banner"] }>
                            <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/273045688_600086077732549_5563611425861614705_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5iCCczuM2n0AX8rXwin&_nc_ht=scontent-mia3-1.xx&oh=00_AfAb9cR7p_drIwPQWhRMnunsjsMTqnzCHQYhXPJVEKtFfw&oe=637689BE" alt={`${Store} Banner`} />
                            <h3>{ Store }</h3>
                        </div>
                    </div>
                    
                    <Collections/>
                </div>
            }
        </>
    );
}

export default Store;