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
