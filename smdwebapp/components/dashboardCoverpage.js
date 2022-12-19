import Image from "next/image";
import imgpath from "../public/static/coverpage.jpg";
import styles from "../styles/Home.module.scss";

export default function DashboardCoverPage() {
  return (
    <>
      <div className={styles.coverpage}/>
    </>
  );
}
