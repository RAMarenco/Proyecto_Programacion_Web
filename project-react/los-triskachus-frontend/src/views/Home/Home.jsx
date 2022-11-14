import classes from './Home.module.scss';

import Slider from './../../components/Slider/Slider';
import Card from '../../components/Card/RecentStoreCard/RecentStoreCard';

import { useAuth } from '../../core/AuthRoleUser';

const Home = () => {
    const user = useAuth().role;
    return (
        <>
            <div className={ classes["Home"] }>
                <div className={ classes["Slider-Container"] }>
                    <Slider />
                </div>
                {user === "Client" && 
                    <div className={ classes["Card-Container"] }>
                        <Card extraclasses={["recent-stores", "StoreSpheres-container"]} type="StoreSphere" />
                    </div>
                }                
            </div>
        </>
    );
}

export default Home;