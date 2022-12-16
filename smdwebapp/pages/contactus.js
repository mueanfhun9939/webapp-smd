import React from "react";
import NavBar from "../components/navbar";
import Image from "next/image";
import DashboardCoverPage from "../components/dashboardCoverpage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import pathlogo from "../public/static/smdlogo.png";
import pathline from "../public/static/line.png";
import imgsmd from "../public/static/imgSmd.png";
import mapsmd from "../public/static/mapSmd.png";

export default function ContactUs() {
  return (
    <>
      <NavBar />
      <DashboardCoverPage />
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={6}>
              <Box className={styles.boxcontact2}>
                <Image
                  className={styles.imglogo}
                  src={pathlogo}
                  alt="Picture of the author"
                />
                <Typography className={styles.title}>
                  บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด
                </Typography>
                <Box>
                  <Image src={pathline} alt="Picture of the author" />
                </Box>
                <Box>
                  <Image
                    className={styles.imgMap}
                    src={mapsmd}
                    alt="Picture of the author"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={6}>
              <Box className={styles.boxcontact1}>
                <Typography className={styles.header}>
                  ติดต่อเราหากมีคำถาม
                </Typography>
                {contactDetail.map((item) => (
                  <div key={item.title}>
                    <Typography className={styles.title}>
                      {item.title}
                    </Typography>
                    <Typography className={styles.subtitle}>
                      {item.detail}
                    </Typography>
                  </div>
                ))}

                <Image
                  className={styles.img}
                  src={imgsmd}
                  alt="Picture of the author"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

const contactDetail = [
  {
    title: "โทร",
    detail: "080-852-6888, 02-1250028",
  },
  {
    title: "ไลน์",
    detail: "080-852-6888",
  },
  {
    title: "อีเมล",
    detail: "smd_security@gmail.com",
  },
  {
    title: "facebook",
    detail: "SMD security",
  },
];
