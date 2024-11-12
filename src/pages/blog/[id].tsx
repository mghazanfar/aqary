import { Box, Typography } from "@mui/material";
import styles from "../../app/page.module.css";
import { BlogDetailsComponent } from "@/components/blog-details";
import { useRouter } from "next/router";

// Blog detail page

const BlogDetails = () => {

  // we use useRouter to get blog id to make API request

  const router = useRouter();
  
  return (
    <Box className={styles.page} display="block !important">
      <Box pb={2} borderBottom="1px solid">
        <Typography variant="h3">Blog Details</Typography>
      </Box>
      <BlogDetailsComponent id={(router?.query?.id as string) || undefined} />
    </Box>
  );
};

export default BlogDetails;
