import React, { useEffect, useState } from 'react'
import styles from '../../styles/portfolio/portfolio.module.css'
import wedding from '../store/wedding_page1.json'
import bridal from '../store/bridal_page1.json'
import nature from '../store/nature_page1.json'
import landscape from '../store/landscape_page1.json'
import Modal from './Modal'


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
        {wedding.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler}></img>})}
        </div>
        <div className={styles.portfolio_content2}>
        {nature.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler}></img>})}
        </div>
        <div className={styles.portfolio_content4}>
        {landscape.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler}></img>})}
        </div>
        <div className={styles.portfolio_content3}>
        {bridal.link.map((url) => {return <img src={url} className={styles.wedding_photo} onClick={imageSliderHandler}></img>})}
        </div>
        </main>
    )
}

export default Portfolio
