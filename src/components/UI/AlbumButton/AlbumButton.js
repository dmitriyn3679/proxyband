import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {actions as selectedActions} from "../../../features/selected";

export const AlbumButton = ({user}) => {
  const dispatch = useDispatch();
  
  const getUserAlbums = () => {
    dispatch(selectedActions.setSelected(user))
  }
  
  return (
    <Button
      variant="outlined"
      onClick={getUserAlbums}
    >
      Albums
    </Button>
  );
}
