import classes from './Card.module.scss';

import StoreSphere from './StoreSphere/StoreSphere';

const Card = ( {extraclasses = [], type = ""} ) => {    
    const extraclassesJoin = extraclasses.map(eClass => {        
        return classes[eClass];
    }).join(' ');   
    let data = [];
    let dataMap = [];
    if(type === "StoreSphere") {
        data = [
            {
                id: 1,
                store: "Lua",
            },
            {
                id: 2,
                store: "MuffinsPlace",
            },
            
        ];
        dataMap = data.map(store => {
            return (
                <StoreSphere key={store.id} store={store}/>
            );
        });
    }

    if (dataMap.length < 4) {
        for (let i = 5; i >= dataMap.length; i--) {
            const emptyStore = <StoreSphere key={`none${i}`} store={{id:i,store:"none"}}/>
            dataMap=[...dataMap, emptyStore];
        }
    }
    
    return (
        <div className={ [classes["Card"], extraclassesJoin].join(" ") }>
            { dataMap && type === "StoreSphere" && 
                <div className={ classes["StoreSpheres"] }>
                    <h3>
                        Tiendas recientes
                    </h3>
                    { dataMap }
                </div>
            }
        </div>
    );
}

export default Card;