import {Grid} from "@mui/material";
import {Album} from "../Album";
import {useSelector} from "react-redux";
import {Loader} from "../UI/Loader";
import {useFetch} from "../../hooks/useFetch";
import {getAlbums} from "../../api/albums";
import {useCallback} from "react";

export const AlbumsList = () => {
  const user = useSelector(state => state.selected);
  const fetchFunc = useCallback(() => getAlbums(user.id), [user]);
  const { data: albums, isLoaded } = useFetch(fetchFunc);
  
  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : (
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{maxHeight: '500px', overflow: 'scroll'}}
        >
          {albums.map(album => (
            <Grid
              key={album.id}
              item
              xs={6}
            >
              <Album title={album.title} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}
