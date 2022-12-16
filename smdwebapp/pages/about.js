import React from "react";
import NavBar from "../components/navbar";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Footer from "../components/footer";
import pathlogo from "../public/static/smdlogo.png";
import pathimg from "../public/static/248972.png";
import DashboardStandard from "../components/dashboardStandard";
export default function About() {
  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1 }} className={styles.boxAbout}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 6, sm: 8, md: 12 }}
        >
          <Grid item xs={6} sm={3} md={5} sx={{ textAlign: "center" }}>
            <Image
              className={styles.img}
              src={pathlogo}
              alt="Picture of the author"
            />
          </Grid>
          <Grid item xs={6} sm={5} md={7}>
            <Typography className={styles.title}>เกี่ยวกับธุรกิจ</Typography>
            <Typography className={styles.subtitle}>
              บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ.
              2565 โดยมีวัตถุประสงค์เพื่อให้บริการงานรักษาความปลอดภัย
              กับหน่วยงานภาคเอกชน ภาครัฐ บริษัทมีการฝึกอบรมพนักงานโดยครูฝึก
              ที่เชี่ยวชาญและชำนาญในด้านการรักษาความปลอดภัยและได้รับการฝึกอบรมในด้านการอำนวยการจราจรเป็นอย่างดี
              มีการประเมินการทำงานของพนักงานให้มีคุณภาพอยู่เสมอ
            </Typography>
            <Typography className={styles.subtitle}>
              เราตระหนักดีว่าการสร้างความพึงพอใจให้แก่ผู้รับบริการคือพันธกิจสำคัญที่สุด
              พนักงานของเราจึงต้องได้รับการอบรมให้มีความสุภาพนอบน้อมและมีทัศนคติที่ดีเกี่ยวกับการรักษาความปลอดภัยและมีใจบริการ
              นอกจากนี้จะมีการตรวจสอบ ควบคุมการทำงานอย่างทั่วถึง
              และมีประสิทธิภาพเรามุ่งมั่นที่จะทำให้ผู้รับบริการได้รับความพึงพอใจสูงสุดในราคาที่ประหยัดและคุ้มค่ากว่า
            </Typography>
            <Typography className={styles.slogan}>
              “เข้มแข็ง มีวินัย ใส่ใจคุณภาพ”
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.boxpersonalsm}>
        <Typography className={styles.title}>ที่ปรึกษา</Typography>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Image
            className={styles.imgpersonal}
            src={pathimg}
            alt="Picture of the author"
          />
        </Box>
        <Typography className={styles.subtitle}>
          พันตำรวจเอก บุญส่งวิทย์ ห้องแซง
        </Typography>
        <Typography className={styles.subtitle}>ผกก.สน.แสมดำ</Typography>
      </Box>
      <Box className={styles.boxpersonalConsult}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 8, md: 12 }}
          >
            <Grid item xs={6} sm={5} md={9} className={styles.personalName}>
              <Typography className={styles.title}>ที่ปรึกษา</Typography>
              <Typography className={styles.subtitle}>
                พันตำรวจเอก บุญส่งวิทย์ ห้องแซง
              </Typography>
              <Typography className={styles.subtitle2}>ผกก.สน.แสมดำ</Typography>
            </Grid>
            <Grid item xs={6} sm={3} md={3}>
              <Image
                className={styles.imgpersonal}
                src={pathimg}
                alt="Picture of the author"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={styles.mission}>
        <Box sx={{ flexGrow: 1 }} className={styles.boxMission}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 6, sm: 8, md: 12 }}
          >
            <Grid item xs={6} sm={4} md={6} sx={{ textAlign: "center" }}>
              <Box className={styles.box}>
                <Typography className={styles.title}>ภารกิจ</Typography>
                <Typography className={styles.subtitle}>
                  บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด
                  เราจะเป็นผู้นำด้านการรักษาความปลอดภัย ในทุกด้าน ไม่ว่าจะเป็น
                  การรักษาความปลอดภัยภายในสถานที่ การรักษาความปลอดภัยบุคคล
                  การรักษาความปลอดภัยให้แก่ทรัพย์สินของท่าน
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={4} md={6}>
              <Box className={styles.box}>
                <Typography className={styles.title}>วิสัยทัศน์</Typography>
                <Typography className={styles.subtitle}>
                  เราให้บริการทุกท่านด้วยความมืออาชีพ และใจที่รักในการบริการ
                  พนักงานทุกคนถูกฝึกฝนอบรมโดยผู้เชี่ยวชาญในด้านการรักษาความปลอดภัยและได้รับการฝึกอบรมในด้านการอำนวยการจราจรเป็นอย่างดี
                  เพื่อปกป้องและรักษาผลประโยชน์รวมถึงทรัพย์สินของท่านอย่างเต็มที่
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <DashboardStandard/>
      <Footer />
    </>
  );
}
