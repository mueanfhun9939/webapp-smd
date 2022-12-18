import * as React from "react";
import { createTheme } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Link from 'next/link'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { MdPhoneInTalk, MdLocationOn, MdEmail } from "react-icons/md";
import pathlogo from "../public/static/smdlogo.png";

const dataList = [
  {
    id: 1,
    icon: <MdPhoneInTalk className={styles.contectIcon} />,
    title: "PHONE NUMBER",
    value: "080-852-6888",
  },
  {
    id: 2,
    icon: <MdLocationOn className={styles.contectIcon} />,
    title: "CONTACT ADDRESS",
    value: "เขตบางขุนเทียน กทม",
  },
  {
    id: 3,
    icon: <MdEmail className={styles.contectIcon} />,
    title: "EMAIL",
    value: "SAMAEDAM.GMAIL.COM",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#121435"
    }
  },
});

export default function NavBar() {
  const router = useRouter()
  const path = router.pathname;
  
  return (
    <>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <AppBar position="static" className={styles.appbar} theme={theme}>
          <Toolbar>
            <Image
              className={styles.logo}
              src={pathlogo}
              alt="Picture of the author"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              className={styles.nameLogo}
            >
              SMD SECURITY CO. LTD.
            </Typography>
            {dataList.map((data) => (
              <Box key={data.id} className={styles.boxcontact}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>{data.icon}</Grid>
                  <Grid item xs>
                    <Typography className={styles.textcontectTitle}>
                      {data.title}
                    </Typography>
                    <Typography className={styles.textcontectTitle}>
                      {data.value}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }} className={styles.manubar}>
        <Link className={path== '/' ? styles.textmanuFocus : styles.textmanu} href="/"> HOME </Link>
        <Link className={path== '/about' ? styles.textmanuFocus : styles.textmanu} href="/about"> ABOUT </Link>
        <Link className={path== '/gallery' ? styles.textmanuFocus : styles.textmanu} href="/gallery"> CATEGORY </Link>
        <Link className={path== '/contactus' ? styles.textmanuFocus : styles.textmanu} href="/contactus"> CONTACT US </Link>
      </Box>
    </>
  );
}
