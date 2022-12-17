import Image from "next/image";
import imgpath from "../public/static/coverpage.jpg";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";

export default function DashboardCoverPage() {
  return (
    <>
    <div className={styles.coverpage}>
    <Box>
        <Box className={styles.boxcompanyname}>
          <p className={styles.companyname}>SMD SECURITY CO. LTD.</p>
        </Box>
      </Box>
    </div>
    
    </>
  );
}
