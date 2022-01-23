import React from 'react'
import styles from '../../styles/modal.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function MenuModal(){
    const[openMenu, setOpenMenu] = useState(false)
    const router = useRouter()
    return(
        <div className={styles.menu_modal}>
         <img src='footer.jpg'></img>
         <div className={styles.menu_modal_content}>
             <Link href='/'><h1>HomePage</h1></Link>
             <Link href='/portfolio'><h1 className={styles[router.pathname == '/portfolio' && 'link']}>Portfolio</h1></Link>
             <Link href='/'><h1>Contact</h1></Link>
         </div>
         <div className={styles.menu_modal_content2}>
             <Link href='/'><h2>Wedding work --</h2></Link>
             <Link href='/portfolio'><h2>Wedding work --</h2></Link>
             <Link href='/'><h2>Wedding work --</h2></Link>
         </div>
        </div>
    )
}
