import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Grid from "@mui/material/Grid";
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
        <Typography className={styles.titleGallery}>การฝึกอบรมพนักงาน</Typography>
        <Divider />
      </Box>
      <Box className={styles.boximg}>
        {itemData.map((item) => (
          <>
          <Box sx={{ textAlign: "center"}} key={item.img1}>
            <img src={item.img1} alt="image1" className={styles.img} />
            <img src={item.img2} alt="image1" className={styles.img} />
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
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
  {
    img1: "static/DCS_0066.JPG",
    img2: "static/DCS_0066.JPG",
  },
];
