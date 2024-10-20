import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p2.png" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1 className={styles.title}>Cryptocurrencies present the hot and trendy theme to discuss and research these days, and our fresh web design lets us also add two cents to it.</h1>
                </Link>                
                <p className={styles.desc}>Cryptocurrencies present the hot and trendy theme to discuss and research these days, and our fresh web design lets us also add two cents to it. Take another look at the design for the blog about the cryptoworld.</p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card