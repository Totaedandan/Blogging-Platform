import React from 'react'
import styles from './banner.module.css';
import { Anton } from 'next/font/google'
import { Poppins } from 'next/font/google'


const anton = Anton({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: '400'
  })

function Banner() {
  return (
    <div className={`${styles.container}  ${poppins.className}`}>
        <div className={`${styles.head} ${anton.className}`}>Bugle Blog</div>
        <div className={styles.break}></div>
        <div className={styles.donothing}>
            <span>Engineering</span>
            <span>Product</span>
            <span>Security</span>
            <span>Open Source</span>
            <span>Enterprise</span>
            <span>Community</span>
            <span>Gen AI</span>
        </div>
        <div className={styles.break_2}></div>
    </div>
  )
}

export default Banner