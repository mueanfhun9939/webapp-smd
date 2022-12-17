import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Image from "next/image";
import pathlogo from "../public/static/smdlogo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faStore,
  faSchool,
  faHotel,
  faHospital,
  faIndustry,
  faPlaneDeparture,
  faBuilding,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";

const ItemList = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faHouse} />,
    title: "บ้าน",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faBuilding} />,
    title: "คอนโด",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faHotel} />,
    title: "โรงแรม",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faStore} />,
    title: "ห้างสรรพสินค้า",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faHospital} />,
    title: "โรงพยาบาล",
  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon={faIndustry} />,
    title: "โรงงาน",
  },
  {
    id: 7,
    icon: <FontAwesomeIcon icon={faSchool} />,
    title: "สถานศึกษา",
  },
  {
    id: 8,
    icon: <FontAwesomeIcon icon={faPlaneDeparture} />,
    title: "สนามบิน",
  },
];

export default function Footer() {
  return (
    <>
      <Box className={styles.boxpromote}>
        <Typography className={styles.title}>
          ให้บริการงานรักษาความปลอดภัย
        </Typography>
        <Typography className={styles.title}>
          ทั้งภาครัฐ และเอกชน ในเขต กทมและปริมณฑล
        </Typography>
        <div className={styles.containerPromote}>
          {ItemList.map((item) => (
            <Box className={styles.box} key={item.title}>
              <Typography sx={{ fontSize: "30px" }}>{item.icon}</Typography>
              <Typography className={styles.iconName}>{item.title}</Typography>
            </Box>
          ))}
        </div>
      </Box>
      <Box className={styles.boxfootersm}>
        <Typography className={styles.phone}>ติดต่อสอบถาม</Typography>
        <Typography className={styles.phone}>02-1250028</Typography>
        <Typography className={styles.phone}>080-852-6888</Typography>
        <Button
          className={styles.btn}
          startIcon={
            <FontAwesomeIcon
              icon={faHandPointer}
              className={styles.handPointer}
            />
          }

          href="https://docs.google.com/forms/d/e/1FAIpQLSc25kKl_LNsKSqcwvkHuouRq1LZszXAAJGXOKXXKOB8xRl_OA/viewform?usp=sf_link"
        >
          <Typography className={styles.name}>ขอใบเสนอราคา</Typography>
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }} className={styles.boxfooter1}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={3} sm={6} md={8}>
            <Typography className={styles.phone}>
              ติดต่อสอบถาม 02-1250028, 080-852-6888
            </Typography>
          </Grid>
          <Grid item xs={1} sm={2} md={4}>
            <Button
              className={styles.btn}
              sx={{ paddingTop: "10%" }}
              startIcon={<FontAwesomeIcon icon={faHandPointer} />}
              href="https://docs.google.com/forms/d/e/1FAIpQLSc25kKl_LNsKSqcwvkHuouRq1LZszXAAJGXOKXXKOB8xRl_OA/viewform?usp=sf_link"
            >
              <Typography className={styles.nameBtn}>ขอใบเสนอราคา</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className={styles.boxfooter}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={6}>
            <Image
              className={styles.logo}
              src={pathlogo}
              alt="Picture of the author"
            />
            <Typography className={styles.title}>
              บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด
            </Typography>
            <Typography className={styles.subtitle}>
              เป็นบริษัทที่ให้บริการด้านการรักษาความปลอดภัย
              ได้รับความไว้วางใจจากลูกค้าชั้นนำเป็นจำนวนมาก
              เนื่องจากเรามุ่งมั่นและพัฒนาอยู่เสมอในเรื่องการให้บริการ
              และการรักษาความปลอดภัยมีการอบรมพนักงานเป็นประจำ
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={6} className={styles.gridBox}>
            <Typography className={styles.title}>ติดต่อสอบถาม</Typography>
            <Typography className={styles.subtitle}>
              บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด 88/1 ถ.พระรามที่ 2 ซอย 82
              แขวง แสมดำ เขตบางขุนเทียน กทม.
            </Typography>
            <Box className={styles.containerBtn}>
              <Button startIcon={<FacebookIcon />} className={styles.btn}>
                <Typography className={styles.namebtn}>SMD Security</Typography>
              </Button>
              <Button startIcon={<FacebookIcon />} className={styles.btn}>
                <Typography className={styles.namebtn}>080-852-6888</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
