import { useState, useEffect, Fragment } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Box,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

export default function ResponsiveDialog({
  open,
  onClose,
  title,
  description,
  img,
  createdAt,
}) {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (open) {
      setOpenModal(true);
    }
  }, [open]);

  const handleClose = () => {
    setOpenModal(false);
    onClose();
  };

  return (
    <Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="paper"
        sx={{".MuiPaper-root": {
                          width: {sx: "100%", md: "65%"},
                        },}}
      >
        {/* Close Button in top-right */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            backgroundColor: "#C8C8C8",
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
            zIndex: 1,
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <Box
            component="img"
            src={`${import.meta.env.BASE_URL}${img}`}
            alt={title}
            sx={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 1,
              mb: 2,
            }}
          />
          <DialogTitle
            sx={{ paddingRight: "0", paddingLeft: "0" }}
            id="responsive-dialog-title"
          >
            {title} - {createdAt}
          </DialogTitle>
          <DialogContentText sx={{ textAlign: "justify" }}>
            {description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
