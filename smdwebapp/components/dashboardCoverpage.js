import Image from "next/image";
import imgpath from "../public/static/coverpage.jpg";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";
import coverImage from "../public/static/highLight.png"

export default function DashboardCoverPage() {
  return (
    <>
    <div className={styles.coverpage}/>
    </>
  );
}
