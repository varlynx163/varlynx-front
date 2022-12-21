import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import React, {useCallback} from "react";

const OrderDialog = ({ open, onClose }) => {
  const handleOrder = useCallback(() => {

  }, []);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      PaperProps={{ sx: { minHeight: '300px', width: '650px' } }}
    >
      <Box sx={{ padding: '10px 15px' }}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Order requirements
        </Typography>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Describe your requirements"
          style={{ width: '80%', padding: '10px' }}
          minRows={5}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Requirements will be reviewed as soon as possible
        </Typography>
        <Box style={{ marginTop: '60px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button sx={{ width: '150px' }} onClick={handleOrder} variant="contained">Send</Button>
        </Box>
      </Box>
    </Dialog>
  );
};

export default OrderDialog;
