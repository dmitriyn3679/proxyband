import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {Button} from "@mui/material";
import './HomeButton.scss';

export const HomeButton = () => {
  return (
    <Link to="/" className="home-button">
      <Button
        variant="outlined"
        startIcon={<HomeIcon />}
        sx={{marginBottom: '20px'}}
      >
        Home
      </Button>
    </Link>
  );
}
