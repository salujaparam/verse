import React from 'react'
import Title from './Title'
import styles from '../css/players.module.css'
import players from '../constants/players'

const Games = () => {
    return (
        <section className={styles.services}>
            <Title title="Team" subtitle="Members" />
            <div className={styles.center}>
                {
                    players.map((item, index) => {
                        return (
                            <article key={index} className={styles.service}>
                                <h4>{item.name}</h4>
                                <img src={item.image} alt={item.name} className={styles.crop} />
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </article>
                        )
                    })
                }
            </div>
{/* 
            <div className={styles.center}>
                {
                    services.map((item, index) => {
                        return (
                            <article key={index} className={styles.service}>
                                <img src={item.icon} alt={item.title} className={styles.crop}/>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </article>
                        )
                    })
                }
            </div> */}
        </section>
    )
}

export default Games
