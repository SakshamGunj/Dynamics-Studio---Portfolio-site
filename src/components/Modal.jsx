import React from 'react'
import styles from '../../styles/modal.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'

export function MenuModal(){
    const fadein = {
        hidden:{
            opacity: 0,
            y: '10rem'
        },
        visible:{
            opacity:1,
            y:'0rem',
            transition:{
                duration: 0.5
            }
        },
        exit:{
            opacity:0,
            transition:{
                duration: 1
            }
        }
    }
    const[openMenu, setOpenMenu] = useState(false)
    const router = useRouter()
    return(
        <motion.div className={styles.menu_modal} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
         <img src='footer.jpg'></img>
         <div className={styles.menu_modal_content}>
             <Link href='/'><h1>HomePage</h1></Link>
             <Link href='/portfoliowork'><h1 className={styles[router.pathname == '/portfoliowork' && 'link']}>Portfolio</h1></Link>
             <Link href='/'><h1>Contact</h1></Link>
         </div>
         <div className={styles.menu_modal_content2}>
             <Link href='/portfoliowork/wedding'><h2>Wedding work ↗</h2></Link>
             <Link href='/portfoliowork/indoor'><h2>indoor work ↗</h2></Link>
             <Link href='/portfoliowork/commercial'><h2>commercial work ↗</h2></Link>
             <Link href='/portfoliowork/product'><h2>product work ↗</h2></Link>
         </div>
        </motion.div>
    )
}
