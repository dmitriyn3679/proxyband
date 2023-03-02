import {Box, Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {actions as selectedActions} from "../../features/selected";
import {AlbumsList} from "../AlbumsList";
import {styles} from "./styles";

export const CustomModal = () => {
  const user = useSelector(state => state.selected);
  const dispatch = useDispatch();
  
  const handleClose = () => dispatch(selectedActions.removeSelected());
  
  return (
    <div>
      <Modal
        open={!!user}
        onClose={handleClose}
      >
        <Box sx={styles}>
          <AlbumsList />
        </Box>
      </Modal>
    </div>
  );
}
