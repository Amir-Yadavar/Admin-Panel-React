import React from 'react'
import './Navbar.css'
import './NavbarLocal.css'
import { Badge } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

export default function Navbar() {
    return (
        <>
            <section className='container-fluid mt-2'>
                <section className='row justify-content-between align-items-center'>
                    <section className='col-6 col-md-4 p-2 logo'>Dashbord Admin <AdminPanelSettingsOutlinedIcon fontSize='large' className='mx-2' /></section>
                    <section className='col-6 col-md-4  p-2 nav-right text-end'>

                        <Badge badgeContent={2} color="secondary" className='mx-2'>
                            <NotificationsNoneIcon fontSize='medium'/>
                        </Badge>

                        <Badge badgeContent={2} color="secondary" className='mx-2'>
                            <LanguageIcon fontSize='medium' />
                        </Badge>

                        <SettingsIcon fontSize='medium' className='mx-2' />

                        <img src="/img/nav.png" alt="" />
                    </section>
                </section>
            </section>
        </>
    )
}
