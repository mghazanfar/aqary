import { Box, Typography } from "@mui/material";
import styles from "./page.module.css";
import { Blogs } from "@/components/blogs";

export default function Home() {
  return (
    <Box className={styles.page}>
      <Box pb={2} borderBottom="1px solid">
        <Typography variant="h3">Blog Application Development</Typography>
      </Box>
      <Blogs />
    </Box>
  );
}
