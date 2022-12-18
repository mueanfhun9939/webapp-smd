import React from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import image1 from "../public/static/image/img1.jpg";
import image2 from "../public/static/image/img2.jpg";
import image3 from "../public/static/image/img3.jpg";
import image4 from "../public/static/image/img4.jpg";
import image5 from "../public/static/image/img5.jpg";
import image6 from "../public/static/image/img6.jpg";
import image7 from "../public/static/image/img7.jpg";
import image8 from "../public/static/image/img8.jpg";
import image9 from "../public/static/image/img9.jpg";
import image10 from "../public/static/image/img10.jpg";
import image11 from "../public/static/image/img11.jpg";
import image12 from "../public/static/image/img12.jpg";
import image13 from "../public/static/image/img13.jpg";
import image14 from "../public/static/image/img14.jpg";

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
              key={item.id}
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
    id:1,
    img1: image1,
    img2: image2,
  },
  {
    id:2,
    img1: image3,
    img2: image4,
  },
  {
    id:3,
    img1: image5,
    img2: image6,
  },
  {
    id:4,
    img1: image7,
    img2: image8,
  },
  {
    id:5,
    img1: image9,
    img2: image10,
  },
  {
    id:6,
    img1: image11,
    img2: image12,
  },
  {
    id:7,
    img1: image13,
    img2: image14,
  }
];
