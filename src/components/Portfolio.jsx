import React, { useEffect, useState } from 'react'
import styles from '../../styles/portfolio/portfolio.module.css'
//import wedding from '../../public/store/wedding_page1.json'
import {wedding_url} from '../store/bridal_page1'
import Modal from '../components/Modal'


function Portfolio() {
    const imageSliderHandler = () => {
        console.log('slided')
    }
    return (
      
        <main className={styles.main}>
        <Modal />
        <div className={styles.portfolio_heading}>
            <h3>All</h3>
            <h3>Wedding</h3>
            <h3>Model</h3>
            <h3>Nature</h3>
        </div>
        <div className={styles.portfolio_content1}>
        {wedding_url.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler} key={url}></img>})}
        </div>
        <div className={styles.portfolio_content2}>
        {wedding_url.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler} key={url}></img>})}
        </div>
        <div className={styles.portfolio_content4}>
        {wedding_url.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler} key={url}></img>})}
        </div>
        <div className={styles.portfolio_content3}>
        {wedding_url.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler} key={url}></img>})}
        </div>
        </main>
    )
}

export default Portfolio
