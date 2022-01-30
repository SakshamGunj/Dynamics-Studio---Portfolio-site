import React from 'react'
import styles from '../../styles/services.module.css'
import { TopNav } from './Navbar'
import Link from 'next/link'
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"

function Card({image, heading, subheading, description, key, link}){
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    return(
        <Link href={link} >
        <div className={styles.card} key={key} data-aos = "fade-right">
         <div className={styles.card_image}>
         <img src = {image}></img>
         </div>
         <div className={styles.card_heading}>
         <h3>{heading}</h3>
         <h2>{subheading}</h2>
         </div>
         <div className = {styles.card_content}>
         <h3>{description}</h3>
         <h2>Explore Work</h2>
         </div>
        </div>
        </Link>
    )
}

function Services() {
    return (
        <section className = {styles.services}>
            <div className={styles.servicesHeading}>
            <h3>I offer my clients a wide range of services in various directions. Someone thinks that a professional photographer should be focused on one type of photography, but for my practice I have gained enough experience to feel confident in several different directions.</h3>
            </div>
            <div className = {styles.servicesCard}>
             <Card key='1' link = '/portfoliowork/wedding' image='model1.jpg' heading = 'emotion captured in time' subheading = 'Wedding Photography' description="Marriage is one of the most important and emotional events in our life. Therefore, choosing a photographer for this purpose should be approached very responsibly. I have a lot of experience to working on weddings and don't miss anything.
"/>
             <Card key='2' link = '/portfoliowork/commercial' image='photographer1.jpg' heading = 'help selling something' subheading = 'Commercial works'  description="If we are talking about high-quality promotional photos, then you can not talk about savings, but you need to approach the matter with all responsibility and seriousness. After all, future sales directly depend on the quality of the finished photos."/>
             <Card key='3' link = '/portfoliowork/indoor' image='model3.jpg' heading='pictures tell memories' subheading = 'Indoor photography' description="If you are a beginner model and you do not have portfolio of enough quality so this service is for you. Together we can create you professional models portfolio. The work takes place both in the studio and in nature, depending on the wishes of the client."/>
             <Card key='4' link = '/portfoliowork/product' image='big.jpg' heading='products too have memories' subheading = 'Product Photography' description="If we are talking about high-quality promotional photos, then you can not talk about savings, but you need to approach the matter with all responsibility and seriousness. After all, future sales directly depend on the quality of the finished photos."/>
            </div>
        </section>
    )
}

export default Services

