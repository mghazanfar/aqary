"use client";

import { Box } from "@mui/material";
import { Blog } from "../blog";
import { blogsFetcher, useSwrHook } from "@/fetchers";
import { blogsPostsDataEndpoint } from "@/constant";
import { IBlog } from "@/interfaces";

export const Blogs = () => {
  const { data, isLoading } = useSwrHook(blogsPostsDataEndpoint, blogsFetcher);
  

  // empty objects' array to show loading data when api is loading data

  const dataToRender = isLoading ? [{}, {}, {}, {}, {}, {}, {}, {}, {}] : data;
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }}
      gap={2}
      mt={2}
    >
      {dataToRender?.map((blog: IBlog) => (
        <Blog loading={isLoading} key={blog?.id} {...blog} />
      ))}
    </Box>
  );
};
