import classes from './Stores.module.scss';
import StoreSections from './../../components/StoreSections/StoreSections';
import { useAuth } from '../../core/AuthRoleUser';

const Stores = () => {
    const user = useAuth().role;

    const dataDummy = [
        {
            Category: "Bisuteria",
            Stores: 
            [                
                {
                    Store: "Lua"
                },
                {
                    Store: "Pulseritas Cherry 🍒"
                },
                {
                    Store: "a"
                },
                {
                    Store: "b"
                },
                {
                    Store: "c"
                },
                {
                    Store: "d"
                },
                {
                    Store: "e"
                },
                {
                    Store: "f"
                }
            ]
        },
        {
            Category: "Postres",
            Stores: 
            [                
                {
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
        {(user === "Client" || user === "") && 
            <>
                { data }
            </>
        }
        </div>
    );
}

export default Stores;