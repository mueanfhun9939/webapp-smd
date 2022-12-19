import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Home.module.scss";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import GppGoodIcon from "@mui/icons-material/GppGood";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

const standard = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon icon={faUserShield} className={styles.iconStandard} />
    ),
    title: "จัดหา รปภ.ตรงตามคุณสมบัติฝึกอบรม และตามมาตรฐานวิชาชีพ",
  },
  {
    id: 2,
    icon: <AccessTimeFilledIcon className={styles.iconStandard} />,
    title: "ลงพื้นที่ตามวันเวลาที่กำหนด",
  },
  {
    id: 3,
    icon: <EventAvailableIcon className={styles.iconStandard} />,
    title: "สายตรวจเข้าตรวจพื้นที่อย่างน้อย 3 ครั้ง/สัปดาห์",
  },
  {
    id: 4,
    icon: <Diversity3Icon className={styles.iconStandard} />,
    title:
      "ฝ่ายบริหารเข้าพบผู้ว่าจ้าง และประเมินความพึงพอใจในการรับบริการ 1ครั้ง/เดือน",
  },
  {
    id: 5,
    icon: <GppGoodIcon className={styles.iconStandard} />,
    title:
      "ครูฝึกเข้าฝึกอบรมพื้นที่ตามมาตราฐานวิชาชีพ อย่างน้อย 1 ครั้ง ต่อสัปดาห์ตามความเหมาะสมของหน้างาน",
  },
  {
    id: 6,
    icon: <Diversity1Icon className={styles.iconStandard} />,
    title: "ควบคุมการทำงานให้มีประสิทธิภาพตามความพึงพอใจของลูกค้า",
  },
];

export default function DashboardStandard() {
  return (
    <>
      <div className={styles.bg}>
        <Box sx={{ flexGrow: 1 }} className={styles.boxTitleStandard}>
          <Box>
            <Typography className={styles.titleStandard}>
              มาตรฐานการบริการ
            </Typography>
          </Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className={styles.gridStandard}
          >
            {standard.map((data) => (
              <Grid xs={4} sm={4} md={4} key={data.id}>
                <Box
                  sx={{
                    backgroundColor: "#FFF6D0",
                    height: "200px",
                    width: "80%",
                    boxShadow: "10px 10px 5px #FFCC00",
                    margin: "auto",
                  }}
                >
                  <CardContent>
                    <Box sx={{ width: "100%", textAlign: "center" }}>
                      {data.icon}
                    </Box>
                    <Typography
                      className={styles.subdetail}
                      sx={{
                        fontSize: 20,
                        textAlign: "center",
                        lineHeight: 1,
                        paddingTop: "20px",
                        fontFamily: "Noto Serif Thai",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {data.title}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
