import classes from './SideMenu.module.scss';

import SideMenu_SearchBar from "./SideMenu-SearchBar/SideMenu-SearchBar";
import Actions from '../../../Actions/Actions';

const SideMenu = ({ menuElements = [], isOpen = false }) => {
    return (
        <div className={ `${classes["SideMenu"]} ${isOpen ? classes["SideMenu-active"] : ""}` }>
            <div className={ classes["SideMenu-Container"]  }>
                <SideMenu_SearchBar />
                <div className={ classes["SideMenu-Actions"] }>
                    <Actions menuElements={ menuElements } menuType="Side"/>
                </div>
            </div>            
        </div>
        
    );
}

export default SideMenu;