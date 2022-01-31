import React from "react";
import { useState } from "react";
import styles from '../../styles/navbar.module.css'
import { PrimaryButton } from "../utilscomponents/Button";
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import CloseIcon from "@material-ui/icons/Close";
import WhatsAppIcon from "@material-ui/icons/WhatsApp" 
import TwitterIcon from '@material-ui/icons/Twitter'


export function TopNav(props){
    const [menu, openMenu] = useState(false)
    const menuOpenHandler = () => {
        props.OpenMenu(true)
        openMenu(true)
    }
    const menuCloseHandler = () => {
        props.OpenMenu(false)
        openMenu(false)
    }
    return(
        <nav className={styles.top_nav}>
        <div>
            {menu == true && <button className={styles['primary_round_button']} onClick={menuCloseHandler}><CloseIcon style={{fontSize: '3rem', }} /></button>}
            {menu == false && <button className={styles['primary_round_button']} onClick={menuOpenHandler}><MenuIcon style={{fontSize: '3rem', }} /></button>}
        </div>
         <PrimaryButton content='Contact' />
    </nav>
    )
}

export function RightNav(){
    return(
        <nav className = {styles.right_nav}>
        <InstagramIcon style = {{fontSize: '3rem', fill: '#ffffff'}} />
        <FacebookIcon style = {{fontSize: '3rem', fill: '#ffffff'}} />
        <TwitterIcon style = {{fontSize: '3rem', fill: '#ffffff'}} />
        <WhatsAppIcon style = {{fontSize: '3rem', fill: '#ffffff'}} />
       </nav>
    )
}