import {Grid} from "@mui/material";
import {Post} from "../Post";
import {getPosts} from "../../api/posts";
import {Loader} from "../UI/Loader";
import {HomeButton} from "../UI/HomeButton";
import {useFetch} from "../../hooks/useFetch";
import {useCallback} from "react";

export const PostsList = ({ userId }) => {
  const fetchFunc = useCallback(() => getPosts(userId), [userId]);
  const { data: posts, isLoaded } = useFetch(fetchFunc);
  
  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <>
          <HomeButton />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {posts.map((post) => (
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                key={post.id}
              >
                <Post title={post.title} body={post.body} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
