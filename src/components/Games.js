import React from 'react'
import Title from './Title'
import styles from '../css/services.module.css'
import services from '../constants/services'

const Games = () => {
    return (
        <section className={styles.services}>
            <Title title="Games" subtitle="we play" />
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
            </div>
        </section>
    )
}

export default Games
