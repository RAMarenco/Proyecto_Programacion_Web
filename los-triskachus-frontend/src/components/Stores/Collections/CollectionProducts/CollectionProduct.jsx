import classes from './CollectionProduct.module.scss';

import { Link } from 'react-router-dom';

const CollectionProduct = ( {id, Name = "", Price= "", Image = "", Store = ""} ) => {
    return (
        <Link to={`./Product/${id}/${Name}`} className={ classes["CollectionProduct"] }>
            <div className={ classes["Product-image"] }>
                <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/301808740_473491274788834_6179554599056372910_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=SkEF3L1zXGEAX-NjhP0&_nc_ht=scontent-mia3-1.xx&oh=00_AfCAz0Gxbu1Vrbkqv977OOMsLAVATRU2N_oGwzYpxt2D5w&oe=6376F985" alt={`${Name}`} />
                <div className={ classes["Store-Name"] }>
                    <h5>
                        {Store ? Store : "Lua Bisuteria"}
                    </h5>
                </div>
            </div>
            <div className={ classes["Product-details"] }>
                <h5 className={ classes["Product-name"] }>
                    {Name ? Name : "Argollas tejido oro laminado "}
                </h5>
                <div className={ classes["Product-price"]}>                    
                    { Price ? Price : 
                        Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format("15")
                    }                
                </div>
            </div>
        </Link>
    );
}

export default CollectionProduct;