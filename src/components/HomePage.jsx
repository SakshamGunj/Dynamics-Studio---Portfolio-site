import React, { useEffect } from 'react'
import styles from '../../styles/homepage/homepage.module.css'

function HomePage() {
    return (
        <main className={styles.main}>
            <nav className={styles.top_nav}>
                <div>
                    <button className={styles.primary_round_button}></button>
                </div>
                <div>
                    <h3>Shashank Kumar</h3>
                </div>
                <div >
                    <button className={styles.primary_button}>Get In Touch</button>
                </div>
            </nav>
            <header className={styles.header}>
             <img src='big.jpg' className={styles.large_image} />
             <div  className = {styles['header_title']}><h1>Dynami从</h1></div>
             <div  className={styles['small_image']}>
             <img src='small-removebg.png'/>
             </div>
            </header>
            <section className={styles.article}>
                <div className = {styles.article_image}>
                 <img src = 'photographer2.jpg' />
                </div>
                <div className = {styles.article_content}>
                    <article>
                        <p className={styles.article_bold}>Awkward introduction? Clammy handshake? Nah, let’s go in for a virtual bear hug and a quick two-minute spiel about who I am, because who I am is your new hyper-talented mate – a creative director and visual connoisseur with a background and degree in commercial and photojournalistic photography.</p>
                        <p className={styles.article_normal}>As a multidisciplinary visual creator, I have a keen focus on film and an insatiable obsession with storytelling. I started out shooting weddings, where I learned the mystic and lesser-studied art of making people feel comfortable in front of a camera; from there I branched out into commercial work before founding my own production company, fēlan films (derived from the origin of the word ‘FEELING’...you feel?).</p>
                        <p className={styles.article_normal}>Collaboration is the lifeblood of the moving image and a large part of why I adore what I do. Our team learned so much through creating content for top-tier clients that we felt downright professorial and accepted our humble duty to share the fēlan genius with the masses. Corduroy jackets and mismatched elbow patches donned, we created Moments in a Minute – a complete guide to creating meaningful, impactful content that grabs people by the eyeballs for sixty seconds and refuses to let go.</p>
                        <p className={styles.article_normal}>I love creating films in Melbourne, Sydney, all over Australia and the rest of the world. However, I also teach, work on live stream events, capture commercial and wedding photography and anything else with a heart that beats to the rhythm of filmmaking. And for the next few months I’m a Byron Bay commercial director, focused on creating awesome content for a dazzling array of clients.</p>
                        <p className={styles.article_normal}>So that’s Andy in a nutshell. If you want to learn more about me (especially how I ended up inside a gigantic nut), take a peek around the rest of my site.</p>
                    </article>
                </div>
            </section>
            <section className={styles.photos}>
                <img src = 'http://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className={styles.photo1} />
                <img src = 'http://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className={styles.photo2} />
                <img src = 'http://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' className={styles.photo3} />
                <img src = 'http://images.pexels.com/photos/1921168/pexels-photo-1921168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' className={styles.photo4} />
                <img src = 'http://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' className={styles.photo5} />
                <img src = 'model3.jpg' className={styles.photo6} />
            </section>
            <footer className={styles.footer}>
                <h2 className={styles.footer_email}>shashankumar@gmail.com</h2>
                <img src = 'footer.jpg' />
                <h3 className={styles.footer_content_h3}>The Dynamics Studio</h3>
            </footer>
        </main>
    )
}

export default HomePage