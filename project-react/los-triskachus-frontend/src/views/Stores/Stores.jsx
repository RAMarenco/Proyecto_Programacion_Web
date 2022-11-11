import classes from './Stores.module.scss';
import StoreSections from './../../components/StoreSections/StoreSections';
import { useAuth } from '../../core/AuthRoleUser';
import { useOutlet, Outlet } from 'react-router-dom';

const Stores = () => {
    const user = useAuth().role;
    const outlet = useOutlet();

    const dataDummy = [
        {
            Category: "Bisuteria",
            Stores: 
            [                
                {
                    id: 1,
                    Store: "Lua"
                },
                {
                    id: 3,
                    Store: "Pulseritas Cherry 🍒"
                },
                {
                    id: 4,
                    Store: "a"
                },
                {
                    id: 5,
                    Store: "b"
                },
                {
                    id: 6,
                    Store: "c"
                },
                {
                    id: 7,
                    Store: "d"
                },
                {
                    id: 8,
                    Store: "e"
                },
                {
                    id: 9,
                    Store: "f"
                }
            ]
        },
        {
            Category: "Postres",
            Stores: 
            [                
                {
                    id: 2,
                    Store: "MuffinsPlace"
                }
            ]
        }        
    ];

    const data = dataDummy.map(
        Stores => {
            return (
                <StoreSections key={Stores.Category} Category={Stores.Category} Stores={Stores.Stores}/>
            );            
        }
    );
    
    return (
        <div className={ classes["Stores"] }>
            {outlet ? <Outlet/> :
                (user === "Client" || user === "") && 
                <>
                    { data }
                </>
            }
        
        </div>
    );
}

export default Stores;