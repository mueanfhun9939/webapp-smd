import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const itemData = [
  {
    img: "static/DCS_0066.JPG",
    title: "Breakfast",
  },
  {
    img: "static/DCS_0080.JPG",
    title: "Burger",
  },
  {
    img: "static/DCS_0092.JPG",
    title: "Camera",
  },
  {
    img: "static/DCS_0098.JPG",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "static/MOH_2068.JPG",
    title: "Hats",
    cols: 2,
  },
  {
    img: "static/MOH_2088.JPG",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "static/MOH_2151.JPG",
    title: "Basketball",
  },
  {
    img: "static/DCS_0066.JPG",
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
      <Carousel className={styles.boxImg}>
        {itemData.map((item) => (
          <div key={item.item}>
            <img src={item.img} alt="image1" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
