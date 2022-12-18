import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image1 from "../public/static/image/img1.jpg";
import image2 from "../public/static/image/img2.jpg";
import image3 from "../public/static/image/img3.jpg";
import image4 from "../public/static/image/img4.jpg";
import image5 from "../public/static/image/img5.jpg";
import image6 from "../public/static/image/img6.jpg";
import image7 from "../public/static/image/img7.jpg";
import image9 from "../public/static/image/img9.jpg";
import image10 from "../public/static/image/img10.jpg";
import image11 from "../public/static/image/img11.jpg";
import image12 from "../public/static/image/img12.jpg";
import image13 from "../public/static/image/img13.jpg";
import image14 from "../public/static/image/img14.jpg";

const itemData = [
  {
    img: image1,
    title: "image1",
  },
  {
    img: image2,
    title: "image2",
  },
  {
    img: image3,
    title: "image3",
  },
  {
    img: image4,
    title: "image4",
  },
  {
    img: image5,
    title: "image5",
  },
  {
    img: image6,
    title: "image6",
  },
  {
    img: image7,
    title: "image7",
  },
  {
    img: image9,
    title: "image9",
  },
  {
    img: image10,
    title: "image10",
  },
  {
    img: image11,
    title: "image11",
  },
  {
    img: image12,
    title: "image12",
  },
  {
    img: image13,
    title: "image13",
  },
  {
    img: image14,
    title: "image14",
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
