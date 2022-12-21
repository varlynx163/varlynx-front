import React, {useCallback, useState} from "react";
import { styled as styledMUI } from "@mui/material/styles";
import ButtonMUI from "@mui/material/Button";
import OrderDialog from "./OrderDialog";

const Button = styledMUI(ButtonMUI)({
  backgroundColor: '#000',
  fontSize: 24,
  border: '5px solid #762a89',
  '&:hover': {
    backgroundColor: '#762a89'
  },
});

const OrderButton = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setOpen(state => !state);
  }, [setOpen])

  return <>
    <Button onClick={toggleOpen} variant="contained">Make an order</Button>
    <OrderDialog open={open} onClose={toggleOpen} />
  </>
}

export default OrderButton;
