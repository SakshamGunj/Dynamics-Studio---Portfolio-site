import React from "react";
import styles from '../../styles/navbar.module.css'
import { PrimaryButton } from "../utilscomponents/Button";
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import { useState } from "react";

export function TopNav(props){
    const [menu, openMenu] = useState(false)
    const menuOpenHandler = () => {
        openMenu(!menu)
        props.openMenu(menu)
    }
    return(
        <nav className={styles.top_nav}>
        <div>
            <button className={styles['primary_round_button']} onClick={menuOpenHandler}><MenuIcon style={{fontSize: '3rem', }} /></button>
        </div>
         <PrimaryButton content='Get in touch' />
    </nav>
    )
}

export function RightNav(){
    return(
        <nav className = {styles.right_nav}>
        <InstagramIcon style = {{fontSize: '3.5rem', fill: 'rgb(212, 0, 255)'}} />
        <FacebookIcon style = {{fontSize: '3.5rem', fill: 'rgb(212, 0, 255)'}} />
        <TwitterIcon style = {{fontSize: '3.5rem', fill: 'rgb(212, 0, 255)'}} />
       </nav>
    )
}