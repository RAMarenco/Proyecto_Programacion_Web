import classes from './Actions.module.scss';

import ActionButton from './ActionButton/ActionButton';

const Actions = ({ menuElements = [], menuType = "" }) => {
    const user = "Client";
    const menu = menuElements.map(menu => {
        const Url = `/${menu.Page}`;
        if((menu.Page === 'Profile' || menu.Page === 'LogOut' || ((menu.Page === 'LogIn' || menu.Page === 'Stores') && user === 'Default')) && menuType === "Side"){            
            return (
                <ActionButton key={menu.Page} Icon={menu.Page} extraClass={["OnlyPhone"]} Url={Url}/>
            );
        }
        return (
            <ActionButton key={menu.Page} Icon={menu.Page} Url={Url}/>            
        );
    });
    return (
        <>
        {menuType === 'Side' ?
           <div className={ [classes["Actions"], classes["Side"]].join(" ") }>
           { menu }
           </div> :
           <div className={ classes["Actions"] }>
           { menu }
           </div>
        }
        </>        
    );
}

export default Actions;