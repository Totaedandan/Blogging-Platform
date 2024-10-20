import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/Footer";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Banner from "@/components/banner/Banner";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export default function Home() {
  return <div className={`${styles.container}  ${poppins.className}`}>
    <Banner />
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
  </div>;
}
