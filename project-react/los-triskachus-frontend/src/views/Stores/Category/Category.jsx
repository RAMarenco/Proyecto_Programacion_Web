import classes from './Category.module.scss';

import { useParams } from 'react-router-dom';

import CategoryStores from '../../../components/Stores/CategoryStores/CategoryStores';

const Category = () => {
    const { Category } = useParams();

    const dummyData = [
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
        },
    ]

    return (
        <div className={ classes["Category"] }>            
            <div className={ classes["Category-Title"] }>
                <div className={ classes["Title"] }>
                    <h2>
                        { Category }
                    </h2>
                </div>
                <div className={ classes["Line"] }></div>
            </div>
            <div className={ classes["Stores"] }>
                <CategoryStores Stores={ dummyData }/>
            </div>
        </div>
    )
}

export default Category;