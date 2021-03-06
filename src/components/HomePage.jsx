import React, { useEffect, useState,  } from 'react'
import styles from '../../styles/homepage.module.css'
import { MenuModal } from './Modal';
import { PrimaryButton } from '../utilscomponents/Button';
import { TopNav, RightNav } from './Navbar';
import Link from 'next/link'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useRouter } from 'next/router';
import Services from './Services';
import Sidebar from './sidebar';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook'
import CloseIcon from "@material-ui/icons/Close";
import WhatsAppIcon from "@material-ui/icons/WhatsApp" 
import TwitterIcon from '@material-ui/icons/Twitter'
import { motion } from 'framer-motion';


function HomePage() {
    const fadein = {
        hidden:{
            opacity: 0,
            
        },
        visible:{
            opacity:1,
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
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    const router = useRouter()
    const onOpenPortfolioHandler = () => {
        router.push('/portfoliowork')
    }
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <motion.div className={styles[openMenu == true? 'menu_main':'main']} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
           {openMenu && <MenuModal />}
            <TopNav OpenMenu = {onGettingOpenMenuHandler} />
            <RightNav />
            <header className={styles.header}>
             <img src='big.jpg' className={styles.large_image} />
             <div   className = {styles['header_title']}><h1>Dynamic</h1></div>
             <div  className={styles['small_image']}>
             <img src='small-removebg.png'/>
             </div>
            </header>
            <Services />
          
            <section className={styles.article}>
                <div className = {styles.article_image}>
                 <img src = 'photographer2.jpg' />
                </div>
                <div className = {styles.article_content}>
                    <article>
                        <p className={styles.article_bold}>Awkward introduction? Clammy handshake? Nah, let???s go in for a virtual bear hug and a quick two-minute spiel about who I am, because who I am is your new hyper-talented mate ??? a creative director and visual connoisseur with a background and degree in commercial and photojournalistic photography.</p>
                        <p className={styles.article_normal}>As a multidisciplinary visual creator, I have a keen focus on film and an insatiable obsession with storytelling. I started out shooting weddings, where I learned the mystic and lesser-studied art of making people feel comfortable in front of a camera; from there I branched out into commercial work before founding my own production company, f??lan films (derived from the origin of the word ???FEELING???...you feel?).</p>
                        <p className={styles.article_normal}>Collaboration is the lifeblood of the moving image and a large part of why I adore what I do. Our team learned so much through creating content for top-tier clients that we felt downright professorial and accepted our humble duty to share the f??lan genius with the masses. Corduroy jackets and mismatched elbow patches donned, we created Moments in a Minute ??? a complete guide to creating meaningful, impactful content that grabs people by the eyeballs for sixty seconds and refuses to let go.</p>
                        <p className={styles.article_normal}>I love creating films in Melbourne, Sydney, all over Australia and the rest of the world. However, I also teach, work on live stream events, capture commercial and wedding photography and anything else with a heart that beats to the rhythm of filmmaking. And for the next few months I???m a Byron Bay commercial director, focused on creating awesome content for a dazzling array of clients.</p>
                        <p className={styles.article_normal}>So that???s Andy in a nutshell. If you want to learn more about me (especially how I ended up inside a gigantic nut), take a peek around the rest of my site.</p>
                    </article>
                </div>
            </section>
            <section  className={styles.photos} >
                <img src = 'https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className={(styles.photo1)} />
                <img  src = 'https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className={(styles.photo2)} />
                <img  src = 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' className={(styles.photo3)} />
                <img  src = 'https://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' className={(styles.photo4)} />
                <img  src = 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className={(styles.photo5)} />
                <img  src = 'model3.jpg'  className={(styles.photo6)}></img>
                <button onClick={onOpenPortfolioHandler} className={styles.portfolio_button}>View Portfolio</button>
            </section>
            <footer className={styles.footer}>
                <h2 className={styles.footer_email}>thedynamicstudioo@gmail.com</h2>
                <img src = 'footer.jpg' />
                <h3  className={styles.footer_content_h3}>The Dynamic Studio @2021</h3>
                <div className = {styles.footer_contact}>
                <InstagramIcon style = {{fontSize: '3rem', fill: 'white'}} />
        <FacebookIcon style = {{fontSize: '3rem', fill: 'white'}} />
        <TwitterIcon style = {{fontSize: '3rem', fill: 'white'}} />
        <WhatsAppIcon style = {{fontSize: '3rem', fill: 'white'}} />
                </div>
            </footer>
        </motion.div>
    )
}

export default HomePage
