import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { IBlog } from "@/interfaces";
import Link from "next/link";
import { CardActionArea } from "@mui/material";

interface IBlogWithLoading extends IBlog {
  loading?: boolean;
}

export const Blog = (props: IBlogWithLoading) => {

  //all the data is coming from backend and dynamically rendered into this component

  const { loading = false, title, body, id } = props;

  return (
    <Link href="/blog/[id]" as={`/blog/${id}`}>
      <Card
        sx={{
          minWidth: loading ? 345 : undefined,
          maxWidth: 345,
          m: 2,
          height: "100%",
        }}
      >
        <CardActionArea disabled={loading}>
          <CardHeader
            avatar={
              loading ? (
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              ) : (
                <Avatar
                  alt="blog"
                  src="https://blocks.astratic.com/img/general-img-landscape.png"
                />
              )
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                title
              )
            }
          />
          {loading ? (
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <CardMedia
              component="img"
              height="140"
              image="https://blocks.astratic.com/img/general-img-landscape.png"
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}
          <CardContent>
            {loading ? (
              <React.Fragment>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </React.Fragment>
            ) : (
              <Typography
                variant="body2"
                component="p"
                sx={{ color: "text.secondary" }}
              >
                {body}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
