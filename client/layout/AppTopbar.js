import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { deleteToken, getJWT } from '../admin-utils/utils';
// import { getJWT } from '../../../admin-utils/utils';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const toast = useRef(null);
    const [jwtToken, setJwtToken] = useState(null);

    useEffect(() => {
        const jwtToken = getJWT();
        setJwtToken(jwtToken);
    })

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const handleLogOut = () => {
        console.log("LOGOUT");
        deleteToken(jwtToken);
    }

    return (
        <div className="layout-topbar">
            <Link href="/home" className="layout-topbar-logo">
                <img src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
                <span>Nitto Digital</span>
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>

                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </button>
                
                <Link href="/auth/login">
                    <button type="button" className="p-link layout-topbar-button" onClick={handleLogOut}>
                        <i className="pi pi-lock"></i>
                        <span>LogOut</span>
                    </button>
                </Link>
            </div>
        </div>
    );
});

export default AppTopbar;
