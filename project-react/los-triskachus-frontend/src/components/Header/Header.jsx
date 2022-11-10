import classes from './Header.module.scss';

import NavBarMenu from './NavBarMenu/NavBarMenu';
import Header_SearchBar from './Header-SearchBar/Header-SearchBar';
import Actions from './../Actions/Actions';

const Header = ({ menuElements = [], onClickMenu }) => {
    let user = "Client";
    if(user === "Client") {
        menuElements = menuElements.slice(-2);
    }
    return (
        <header className={ classes["Header"] }>
            <NavBarMenu onClickMenu={onClickMenu}/>
            {user === 'Client' && 
                <Header_SearchBar/>
            }
            <Actions menuElements={ menuElements } />
        </header>
    );
}

export default Header;