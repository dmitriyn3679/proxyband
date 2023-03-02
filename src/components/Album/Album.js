import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import postImg from "../../assets/cat-7738210_640.jpeg";

export const Album = ({title}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={postImg}
        title="album img"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{minHeight: '100px'}}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}
