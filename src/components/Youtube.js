import React from 'react'
import Title from './Title'
import styles from '../css/youtube.module.css'
import youtube from '../constants/youtube'

const Youtube = () => {
    return (
        <section className={styles.services}>
            <Title title="follow us" subtitle="on youtube" />
            <div className={styles.center}>
                {
                    youtube.map((item, index) => {
                        return (
                            <article key={index} className={styles.service}>
                                <h4>{item.title}</h4>
                                <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.title} className={styles.crop}/></a>
                                <h4>Games we play</h4>
                                <ul className={styles.list}>
                                    <li>{item.games[0]}</li>
                                    <li>{item.games[1]}</li>
                                    <li>{item.games[2]}</li>
                                </ul>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Youtube
