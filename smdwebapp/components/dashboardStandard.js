import Image from "next/image";
import imgpath from "../public/static/standard.png";
import imgLine from "../public/static/line.png";
import styles from "../styles/Home.module.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const standard = [
  {
    id: 1,
    title: "1.ลงพื้นที่ตามวันเวลาที่กำหนด",
  },
  {
    id: 2,
    title: "2.สายตรวจเข้าตรวจพื้นที่อย่างน้อย 3 ครั้ง/สัปดาห์",
  },
  {
    id: 3,
    title:
      "3.ฝ่ายบริหารเข้าพบผู้ว่าจ้าง และประเมินความพึงพอใจในการรับบริการ 1ครั้ง/เดือน",
  },
  {
    id: 4,
    title:
      "4.ครูฝึกเข้าฝึกอบรมพื้นที่ตามมาตราฐานวิชาชีพ อย่างน้อย 1 ครั้ง ต่อสัปดาห์ตามความเหมาะสมของหน้างาน",
  },
  {
    id: 5,
    title: "5.ควบคุมการทำงานให้มีประสิทธิภาพตามความพึงพอใจของลูกค้า",
  },
  {
    id: 6,
    title: "6.ควบคุมการทำงานให้มีประสิทธิภาพตามความพึงพอใจของลูกค้า",
  },
];

export default function DashboardStandard() {
  return (
    <>
      <Box className={styles.coverstandard}>
        <Image
          className={styles.img}
          src={imgpath}
          alt="Picture of the author"
        />
        <Box className={styles.boxstandardsm}>
          <Typography variant="h4" gutterBottom className={styles.title}>
            มาตรฐานการบริการ
          </Typography>
          <Image
            className={styles.imgLine}
            src={imgLine}
            alt="Picture of the author"
          />
          {standard.map((data) => (
            <Typography
              variant="subtitle2"
              gutterBottom
              key={data.id}
              className={styles.subtitle}
            >
              {data.title}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}
