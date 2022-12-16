import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import imgpath from "../public/static/tower.jpg";
import logoImg from "../public/static/smdsecondary.jpg";
export default function DashboardConCept() {
  return (
    <div className={styles.bgConcept}>
      <Box className={styles.borderBox}>
        <Box className={styles.boxConcept}>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Image
              className={styles.logoCompany}
              src={logoImg}
              alt="Picture of the author"
            />
          </Box>

          <Typography className={styles.textconceptTitle}>
            บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด
          </Typography>
          <Typography className={styles.textconceptSubTitle}>
            บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2565
            โดยมีวัตถุประสงค์เพื่อให้บริการงานรักษาความปลอดภัย
            กับหน่วยงานภาคเอกชน ภาครัฐ บริษัทมีการฝึกอบรมพนักงานโดย ครูฝึก
            ที่เชี่ยวชาญและชำนาญในด้านการรักษาความปลอดภัย
            มีการประเมินการทำงานของพนักงานให้มีคุณภาพอยู่เสมอ
            นอกจากนี้พนักงานของเราได้รับการอบรมให้มีความสุภาพน้อบน้อม
            และมีมุมมองที่ดีที่เกี่ยวข้องกับความปลอดภัย
            เรามุ่งมั่นที่จะทำให้ผู้เข้ารับบริการพึงพอใจ
          </Typography>
          <Typography className={styles.textconceptTitle}>
            “เข้มแข็ง มีวินัย ใส่ใจคุณภาพ”
          </Typography>
        </Box>
      </Box>
      <Box className={styles.borderLarge}>
        <Box className={styles.largeConcept}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Image
                className={styles.logoCompany}
                src={logoImg}
                alt="Picture of the author"
              />
            </Grid>
            <Grid item xs>
              <Typography className={styles.textconceptTitle}>
                บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด
              </Typography>
              <Typography className={styles.textconceptSubTitle}>
                บริษัท รักษาความปลอดภัย เอสเอ็มดี จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ.
                2565 โดยมีวัตถุประสงค์เพื่อให้บริการงานรักษาความปลอดภัย
                กับหน่วยงานภาคเอกชน ภาครัฐ บริษัทมีการฝึกอบรมพนักงานโดย ครูฝึก
                ที่เชี่ยวชาญและชำนาญในด้านการรักษาความปลอดภัย
                มีการประเมินการทำงานของพนักงานให้มีคุณภาพอยู่เสมอ
                นอกจากนี้พนักงานของเราได้รับการอบรมให้มีความสุภาพน้อบน้อม
                และมีมุมมองที่ดีที่เกี่ยวข้องกับความปลอดภัย
                เรามุ่งมั่นที่จะทำให้ผู้เข้ารับบริการพึงพอใจ
              </Typography>
              <Typography className={styles.textconceptTitle}>
                “เข้มแข็ง มีวินัย ใส่ใจคุณภาพ”
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
