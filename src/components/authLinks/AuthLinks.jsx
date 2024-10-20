import React from 'react'
import styles from './authLinks.module.css';
import Link from 'next/link';

function AuthLinks() {
  const status = "notauthenticated";
  return (
    <>
      {
        status === "notauthenticated" ? (
          <div className={styles.signin}>
            <Link href="/login" >Sign in</Link>
            <Link href="/login" className={styles.signup}>Sign up</Link>
          </div>
        ) : (
          <>
            <Link href="/write">Write</Link>
            <span>Logout</span>
          </>
        )
      }
    </>
  )
}

export default AuthLinks