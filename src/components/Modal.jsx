import React from 'react'
import styles from '../../styles/modal.module.css'
import { wedding_url, model_url, nature_url, portrait_url } from '../store/bridal_page1'
import { useState } from 'react'
import { TopNav } from './Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function PortfolioModal(props) {
    const[openMenu, setOpenMenu] = useState(false)
    const onGettingOpenMenuHandler = (e) => {
        setOpenMenu(true)
    }
    const router = useRouter()
    console.log(router)
    const [portfolioOption, setPortfolioOption] = useState('ALL')
    const portfolioChangeHandler = (e) => {
        props.portfolioOption(e.target.outerText)
        setPortfolioOption(e.target.outerText)
    }
    return (
        <div className={styles.modal}>
        <div className={styles.portfolio_heading}>
            <h3 onClick={portfolioChangeHandler} key='All'>ALL</h3>
            <h3 onClick={portfolioChangeHandler} key='weeding'>WEDDING</h3>
            <h3 onClick={portfolioChangeHandler} key='model'>MODEL</h3>
            <h3 onClick={portfolioChangeHandler} key='nature'>NATURE</h3>
        </div>
         {portfolioOption === 'ALL' && <div className={styles.photo_wrapper}>
          {wedding_url.link.map((u) => {return<img src={u}></img>})}
         </div>
         }
         {portfolioOption === 'WEDDING' && <div className={styles.photo_wrapper}>
          {wedding_url.link.map((u) => {return<img src={u}></img>})}
         </div>
         }
         {portfolioOption === 'MODEL' && <div className={styles.photo_wrapper}>
          {model_url.link.map((u) => {return<img src={u}></img>})}
         </div>
         }
         {portfolioOption === 'NATURE' && <div className={styles.photo_wrapper}>
          {nature_url.link.map((u) => {return<img src={u}></img>})}
         </div>
         }
         {portfolioOption === 'PORTRAIT' && <div className={styles.photo_wrapper}>
          {portrait_url.link.map((u) => {return<img src={u}></img>})}
         </div>
         }

        </div>
    )
}

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
        </div>
    )
}
