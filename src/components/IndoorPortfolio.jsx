import React, { useEffect, useState } from 'react'
import styles from '../../styles/portfolio.module.css'
//import wedding from '../../public/store/wedding_page1.json'
import { TopNav } from './Navbar'
import {PortfolioModal, MenuModal} from './Modal'
import { wedding_url, model_url, nature_url, portrait_url } from '../store/bridal_page1'



function IndoorPortfolio({query, weddingurl, natureurl, dataa}) {
    console.log(dataa)
    const imageZoomHandler = (e) => {
        console.log(e.target.currentSrc)
    }
    const [portfolioOption, setPortfolioOption] = useState('ALL')
    const [menu, openMenu] = useState(false)
    const imageSliderHandler = () => {
        console.log('slided')
    }
    const onGettingPortfolioOptionHandler = (option) => {
        setPortfolioOption(option)
    }
    const onGettingOpenMenuHandler = (action) => {
        openMenu(action)
    }
    return (
        <main className={styles.main}>
        <TopNav openMenu = {onGettingOpenMenuHandler} />
        {menu && <MenuModal />}
        {query == 'indoor' &&  <div className={styles.portfolio_heading}>
            <h2  key='Indoor'>indoor</h2>
        </div>}
        {query == 'commercial' &&  <div className={styles.portfolio_heading}>
        <h2  key='Commercial'>commercial</h2>
        </div>}
        {query == 'product' &&  <div className={styles.portfolio_heading}>
        <h2  key='Product'>product</h2>
        </div>}
        {query == 'wedding' &&  <div className={styles.portfolio_heading}>
            <h2 key='Wedding'>wedding</h2>
            <div className = {styles.wedding_options}>
            <h3  key='weeding'>Pre wedding</h3>
            <h3  key='model'>Haldi</h3>
            <h3  key='nature'>Mandap</h3>
            </div>
        </div>}
        <div className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} onClick={imageZoomHandler}></img>})}
        </div>
        <div className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} onClick={imageZoomHandler}></img>})}
        </div>
        <div className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} onClick={imageZoomHandler}></img>})}
        </div>
        <div className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} onClick={imageZoomHandler}></img>})}
        </div>
        </main>
    )
}

export default IndoorPortfolio
