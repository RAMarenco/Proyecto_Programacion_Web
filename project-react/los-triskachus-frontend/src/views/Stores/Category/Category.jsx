import classes from './Category.module.scss';

import { useParams } from 'react-router-dom';

const Category = () => {
    const {Category} = useParams();
    return (
        <>            
            <p>Categoria: {Category}</p>
        </>
    )
}

export default Category;