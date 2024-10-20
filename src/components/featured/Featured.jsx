import React from 'react'
import styles from './featured.module.css';
import Image from 'next/image';

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Hello Bugle Dev here!</span> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Exploration - Detail Page Podcast Website
          </h1>
          <p className={styles.postDesc}>
            My side project is live projectgunpla.com it's a gunpla (Gundam Plastic Model) building documentary. I enjoyed every second when I did the assembly, that's why I want to document the process and the result for each model kit. I hope you enjoy it and am happy to hear your feedback.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured