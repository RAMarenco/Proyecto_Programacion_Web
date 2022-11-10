import classes from './MainLayout.module.scss';

import { useRef, useState } from 'react';
import { Navigate, useOutlet, Outlet } from 'react-router-dom';

import { menuData } from './../core/containers/Menu.jsx';

import Home from './../views/Home/Home';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Contact from './../views/Contact/Contact';
import Profile from './../views/Profile/Profile';
import Stores from './../views/Stores/Stores'
import SideMenu from '../components/Header/NavBarMenu/SideMenu/SideMenu';

const MainLayout = ({Page = ""}) => {
    const outlet = useOutlet();

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

    const PagesList = [
        {
            PageDir: Home,
            PageName: "Home",
        },
        {
            PageDir: Contact,
            PageName: "Contact",
        },
        {
            PageDir: Profile,
            PageName: "Profile",
        },
        {
            PageDir: Stores,
            PageName: "Stores",
        },
    ];
    
    const PageFound = PagesList.filter(pageList => pageList.PageName === Page);
    const PageName = PageFound.length !== 0 ? PageFound[0].PageDir : "";
        
    return (
        <>
        {PageName !== "" ? 
            <>
                <SideMenu menuElements={ menuData } isOpen={isOpen}/>
                <div ref={refMainWrapper} className={ `${classes['Main-Wrapper']} ${isOpen ? classes["Main-Wrapper-black"] : ""}` } onClick={handleClickMenu} >
                </div>  
                <Header menuElements={ menuData } onClickMenu={handleClickMenu}/>
                <main>
                    {
                        outlet ? <Outlet/> :  <PageName />
                    }                    
                </main>
                <Footer/>
            </> :
            <Navigate  to="/" />
        } 
        </>
    );
}

export default MainLayout;