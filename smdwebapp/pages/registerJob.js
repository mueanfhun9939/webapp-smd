import React from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import imgRegister from "../public/static/Register.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
export default function RegisterJob() {
  return (
    <>
      <NavBar />
      <Box className={styles.imgRegister}>
        <Image className={styles.img} src={imgRegister} alt="Picture of the author" />
      </Box>
      <Box className={styles.btnRegister}>
        <Button
          className={styles.btn}
          startIcon={<FontAwesomeIcon icon={faHandPointer} className={styles.iconBtn}/>}
          href="https://forms.gle/zYnaMxZHd9BJDFaN7"
        >
          <Typography className={styles.nameBtn}>สมัครงาน</Typography>
        </Button>
      </Box>
    </>
  );
}
