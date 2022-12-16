import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import pathimg from "../public/static/DCS_0066.JPG";
export default function Gallery() {
  return (
    <>
      <NavBar />
      <Box>
        <Typography className={styles.titleGallery}>
          การฝึกอบรมพนักงาน
        </Typography>
        <Divider />
      </Box>
      <Box className={styles.boximgsx}>
        {itemData.map((item) => (
          <>
            <Box
              sx={{ textAlign: "center" }}
              key={item.img1}
              className={styles.boxlist}
            >
              <Box className={styles.img}>
                <Image src={item.img1} alt="image1" width={150} height={150} />
              </Box>
              <Box className={styles.img}>
                <Image src={item.img2} alt="image1" width={150} height={150} />
              </Box>
            </Box>
          </>
        ))}
      </Box>
      <Box className={styles.boximg}>
        {itemData.map((item) => (
          <>
            <Box
              sx={{ textAlign: "center" }}
              key={item.img1}
              className={styles.boxlist}
            >
              <Box className={styles.img}>
                <Image src={item.img1} alt="image1" width={300} height={300} />
              </Box>
              <Box className={styles.img}>
                <Image src={item.img2} alt="image1" width={300} height={300} />
              </Box>
            </Box>
          </>
        ))}
      </Box>
      <Footer />
    </>
  );
}

const itemData = [
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
  {
    img1: pathimg,
    img2: pathimg,
  },
];
