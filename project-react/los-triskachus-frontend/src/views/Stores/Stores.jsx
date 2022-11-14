import classes from './Stores.module.scss';
import StoreSections from '../../components/Stores/StoreSections/StoreSections';
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
                    Store: "Lua",
                    Image: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/271798148_586987425709081_7041513597468881683_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3deWw_0FPU8AX9gfilt&_nc_ht=scontent-mia3-1.xx&oh=00_AfB7g1J_k1UGAXPT8clsjNVrANUoeaaksLAEEjxhqNcaig&oe=63714C1F"
                },
                {
                    id: 3,
                    Store: "Pulseritas Cherry 🍒",
                    Image: "https://instagram.fsal3-1.fna.fbcdn.net/v/t51.2885-19/313088523_680989836561954_3911379795115680780_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsal3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=h9clQenZOOcAX_2ySm7&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfA9DIR_B1s6IOUfM-W0EY2G6yPc_vqgyXw7F-5oU14lFA&oe=637645E4&_nc_sid=1527a3"
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
                    Store: "MuffinsPlace",
                    Image: "https://instagram.fsal11-1.fna.fbcdn.net/v/t51.2885-19/104362193_265005611475515_495249601566564292_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsal11-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=fWcj42vYuHgAX-h1qKZ&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfBN1iJcQgRMu4Qe0Swms-k94vEqxx-bCc5MQ69G1sfgZw&oe=6376B3B3&_nc_sid=6136e7"
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