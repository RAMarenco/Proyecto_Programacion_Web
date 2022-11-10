import classes from './Home.module.scss';

import Slider from './../../components/Slider/Slider';
import Card from './../../components/Card/Card';

const Home = () => {
    const user = "Client";
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