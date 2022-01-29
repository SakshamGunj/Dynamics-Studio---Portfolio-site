import React, { useEffect, useState } from 'react'
import styles from '../../styles/portfolio.module.css'
//import wedding from '../../public/store/wedding_page1.json'
import { TopNav } from './Navbar'
import {PortfolioModal, MenuModal} from './Modal'
import { wedding_url, model_url, nature_url, portrait_url } from '../store/bridal_page1'



export function IndoorPortfolio({query, weddingurl, natureurl, dataa}) {
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <>
        <main className={styles[openMenu ? 'modal_main':'main']}>
        {openMenu && <MenuModal />}
        <TopNav OpenMenu = {onGettingOpenMenuHandler} />
        <div className={styles.portfolio_heading}>
            <h2  key='Indoor'>indoor</h2>
        </div>
        <div className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        </main>
        </>
    )
}
export function WeddingPortfolio({query, weddingurl, natureurl, dataa}) {
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <main className={styles.main}>
        <TopNav OpenMenu = {onGettingOpenMenuHandler} />
        {openMenu && <MenuModal />}
        <div className={styles.portfolio_heading}>
            <h2 key='Wedding'>wedding</h2>
            <div className = {styles.wedding_options}>
            <h3  key='weeding'>Pre wedding</h3>
            <h3  key='model'>Haldi</h3>
            <h3  key='nature'>Mandap</h3>
            </div>
        </div>
        <div className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        </main>
    )
}
export function CommercialPortfolio({query, weddingurl, natureurl, dataa}) {
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <main className={styles.main}>
        <TopNav OpenMenu = {onGettingOpenMenuHandler} />
        {openMenu && <MenuModal />}
        <div className={styles.portfolio_heading}>
            <h2  key='Indoor'>commercial</h2>
        </div>
        <div className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        </main>
    )
}
export function ProductPortfolio({query, weddingurl, natureurl, dataa}) {
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <main className={styles.main}>
        <TopNav OpenMenu = {onGettingOpenMenuHandler} />
        {openMenu && <MenuModal />}
        <div className={styles.portfolio_heading}>
            <h2  key='Indoor'>product</h2>
        </div>
        <div className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        </main>
    )
}

export function Portfolio({query, weddingurl, natureurl, dataa}) {
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <main className={styles.main}>
        <TopNav OpenMenu = {onGettingOpenMenuHandler} />
        {openMenu && <MenuModal />}
        <div className={styles.portfolio_heading}>
            <h2 key='Wedding'>portfolio</h2>
            <div className = {styles.wedding_options}>
            <h3  key='weeding'>wedding</h3>
            <h3  key='model'>indoor</h3>
            <h3  key='nature'>commercial</h3>
            </div>
        </div>
        <div className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        </main>
    )
}

