import React from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';
import { Poppins } from 'next/font/google'
import { Anton } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const anton = Anton({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})


function Navbar() {
  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <div className={styles.links}>
        <div className={`${styles.logo} ${anton.className}`}>bugle</div>
        <div className={styles.submenu}>
          <Link href="/">Articles</Link>
          <Link href="/">Podcasts</Link>
          <Link href="/">Be a writer</Link>
          <Link href="/" className={styles.wiki}>Talk to us</Link>
        </div>
      </div>
      <div className={styles.menu}>
        <ThemeToggle />
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar