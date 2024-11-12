"use client";

import { Box, Card, Paper, Skeleton, Typography } from "@mui/material";
import { blogsFetcher, useSwrHook } from "@/fetchers";
import { blogsPostsDataEndpoint } from "@/constant";
import { IBlog, IComment } from "@/interfaces";

export const BlogDetailsComponent = ({ id }: IBlog) => {
  const { data: blogDetails, isLoading: isLoadingBlogsDetail } = useSwrHook(
    `${blogsPostsDataEndpoint}/${id}`,
    blogsFetcher
  );
  const { data: comments, isLoading: isLoadingBlogsComments } = useSwrHook(
    `${blogsPostsDataEndpoint}/${id}/comments`,
    blogsFetcher
  );

  // return null when no id is received else show loading of blog detail and comments seperately

  if (!id) {
    return null;
  }

  return (
    <Card sx={{ gap: 1, mt: 2, p: 2, pb: 4 }} variant="outlined">
      {isLoadingBlogsDetail ? (
        <Skeleton width={350} height={200} />
      ) : (
        <>
          <Box display="flex" gap={1}>
            <Typography fontWeight={800}>User ID:</Typography>
            <Typography>{blogDetails?.userId}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <Typography fontWeight={800}>ID:</Typography>
            <Typography>{blogDetails?.id}</Typography>
          </Box>
          <Box display="flex" gap={1}>
            <Typography fontWeight={800}>Title:</Typography>
            <Typography>{blogDetails?.title}</Typography>
          </Box>
          <Box display="flex" gap={1} mb={2}>
            <Typography fontWeight={800}>Body:</Typography>
            <Typography>{blogDetails?.body}</Typography>
          </Box>
        </>
      )}

      {isLoadingBlogsComments ? null : (
        <Typography variant="h5">Comments:</Typography>
      )}
      <Box gap={2} display="flex" flexDirection="column">
        {isLoadingBlogsComments ? (
          <Box display="flex" flexDirection="column" gap={1}>
            <Skeleton width={350} height={60} />
            <Skeleton width={350} height={60} />
            <Skeleton width={350} height={60} />
          </Box>
        ) : (
          comments?.map((comment: IComment) => (
            <Paper sx={{ p: 1 }} elevation={9} key={comment?.id}>
              <Box display="flex" gap={1}>
                <Typography fontWeight={800}>Title:</Typography>
                <Typography>{comment?.name}</Typography>
              </Box>
              <Box display="flex" gap={1}>
                <Typography fontWeight={800}>Body:</Typography>
                <Typography>{comment?.body}</Typography>
              </Box>
              <Box display="flex" gap={1}>
                <Typography fontWeight={800}>By:</Typography>
                <Typography>{comment?.email}</Typography>
              </Box>
            </Paper>
          ))
        )}
      </Box>
    </Card>
  );
};
