import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import pathimg from "../public/static/DCS_0066.JPG";
const itemData = [
  {
    img: pathimg,
    title: "Breakfast",
  },
  {
    img: pathimg,
    title: "Burger",
  },
  {
    img: pathimg,
    title: "Camera",
  },
  {
    img: pathimg,
    title: "Coffee",
    cols: 2,
  },
  {
    img: pathimg,
    title: "Hats",
    cols: 2,
  },
  {
    img: pathimg,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: pathimg,
    title: "Basketball",
  },
  {
    img: pathimg,
    title: "Fern",
  },
];

export default function DashboardGallery() {
  return (
    <div className={styles.boxGallery}>
      <Box sx={{ width: "100%", textAlign: "center"}}>
        <Typography className={styles.title}>
          การฝึกอบรมพนักงาน
        </Typography>
        <Typography className={styles.subTitle}>
          เนื่องจากบริษัทฯ
          เรามุ่งมั่นที่จะเป็นผู้นำในด้านการรักษาความปลอดภัยและการบริการ
          เราจึงมีการฝึกอบรมเจ้าหน้าที่รักษาความปลอดภัยโดยทีมงานทรงคุณวุฒิที่ได้รับการยอมรับจากหลายๆองค์กร
          เพื่อยกระดับมาตรฐานธุรกิจรักษาความปลอดภัยและเสริมสร้างศักยภาพของพนักงาน
          อันจะเป็นประโยชน์สูงสุดของผู้ใช้บริการ
        </Typography>
      </Box>
      <Carousel className={styles.boxImgsx}>
        {itemData.map((item) => (
          <div key={item.item}>
            <Image src={item.img} alt="image1" width={300} height={300}/>
          </div>
        ))}
      </Carousel>
      <Carousel className={styles.boxImg}>
        {itemData.map((item) => (
          <div key={item.item}>
            <Image src={item.img} alt="image1" width={300} height={500}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
