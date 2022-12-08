import Image from "next/image";
import imgpath from "../public/static/coverpage.JPG";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function DashboardCoverPage() {
  return (
    <>
      <Box>
        <Image
          className={styles.coverpage}
          src={imgpath}
          alt="Picture of the author"
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          className={styles.companyname}
        >
          SMD SECURITY CO. LTD.
        </Typography>
      </Box>
    </>
  );
}
