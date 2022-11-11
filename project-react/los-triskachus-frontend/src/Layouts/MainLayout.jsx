import classes from './MainLayout.module.scss';

import { useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { menuData } from './../core/containers/Menu.jsx';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import SideMenu from '../components/Header/NavBarMenu/SideMenu/SideMenu';

const MainLayout = ({Page = ""}) => {

    const refMainWrapper = useRef(null);    
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClickMenu = (e) => {        
        if (isOpen === false) {
            setIsOpen(true);
            return;
        }

        if (refMainWrapper.current && refMainWrapper.current.contains(e.target)){
            setIsOpen(false);
            return;
        }
        setIsOpen(false);
    }    
        
    return (
        <>
        <SideMenu menuElements={ menuData } isOpen={isOpen}/>
        <div ref={refMainWrapper} className={ `${classes['Main-Wrapper']} ${isOpen ? classes["Main-Wrapper-black"] : ""}` } onClick={handleClickMenu} >
        </div>  
        <Header menuElements={ menuData } onClickMenu={handleClickMenu}/>
        <main>
            <Outlet/>        
        </main>
        <Footer/>
        </>
    );
}

export default MainLayout;