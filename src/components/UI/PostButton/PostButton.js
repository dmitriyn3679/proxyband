import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import './PostButton.scss';

export const PostButton = ({ userId}) => {
  return (
    <Link
      to={`/posts?userId=${userId}`}
      className="post-button"
    >
      <Button variant="outlined">Posts</Button>
    </Link>
  );
}
