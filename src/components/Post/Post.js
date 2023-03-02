import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import postImg from '../../assets/cat-7738210_640.jpeg'
import {getShortenText} from "../../helpers/getShortenText";

export const Post = ({ title, body }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={postImg}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{minHeight: '100px'}}
        >
          {getShortenText(title, 60)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{minHeight: '80px'}}
        >
          {getShortenText(body, 150)}
        </Typography>
      </CardContent>
    </Card>
  );
};
