import React, { useEffect, useState } from 'react'
import styles from '../../styles/portfolio.module.css'
//import wedding from '../../public/store/wedding_page1.json'
import { TopNav } from './Navbar'
import Aos from 'aos';
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import {PortfolioModal, MenuModal} from './Modal'
import { wedding_url, model_url, nature_url, portrait_url } from '../store/bridal_page1'



export function IndoorPortfolio({query, weddingurl, natureurl, dataa}) {
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
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <>
        <motion.div className={styles[openMenu ? 'modal_main':'main']} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
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
        </motion.div>
        </>
    )
}
export function WeddingPortfolio({query, weddingurl, natureurl, dataa}) {
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
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <motion.div className={styles.main} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
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
        </motion.div>
    )
}
export function CommercialPortfolio({query, weddingurl, natureurl, dataa}) {
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
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <motion.div className={styles.main} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
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
        </motion.div>
    )
}
export function ProductPortfolio({query, weddingurl, natureurl, dataa}) {
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
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <motion.div className={styles.main} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
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
        </motion.div>
    )
}

export function Portfolio({query, weddingurl, natureurl, dataa}) {
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
    useEffect(() => {
        Aos.init({duration: 500})
    }, [])
    const[openMenu, setOpenMenu] = useState()
    const onGettingOpenMenuHandler = (action) => {
        console.log(action)
        setOpenMenu(action)
    }
    return (
        <motion.div className={styles.main} variants={fadein} initial = "hidden" animate = "visible" exit = "exit">
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
        <div data-aos = "fade-up" className={styles.portfolio_content1}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div data-aos = "fade-up" className={styles.portfolio_content2}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div data-aos = "fade-up" className={styles.portfolio_content3}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        <div data-aos = "fade-up" className={styles.portfolio_content4}>
         {dataa.map((u) => {return <img src = {u} className={styles.portfolio_image} ></img>})}
        </div>
        </motion.div>
    )
}

