import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ProviderInfo from "./ProviderInfo";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import TableCell from "@mui/material/TableCell";
import { Grid, Typography } from "@mui/material";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

const drawerWidth = -240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginBottom: `-250px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginBottom: 0,
//     }),
//   })
// );

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

export default function PersistentDrawerBottom({ comparedItems }) {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          maxHeight: "20%",
          height: "100px",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="bottom"
      open={true}
    >
      <List sx={{ display: "flex" }}>
        {console.log("in drawer", comparedItems)}
        {comparedItems.map((el, index) => (
          <ListItem key={index}>
            <ProviderInfo
              provider_name={el.provider_name}
              provider_logo_image_url={el.provider_logo_image_url}
              deal_name={el.deal_name}
            />
          </ListItem>
        ))}
        {comparedItems.length > 1 ? (
          <ListItem>
            <Button variant="outlined" onClick={handleOpen}>
              Compare deals ({comparedItems.length} of {comparedItems.length})
            </Button>
          </ListItem>
        ) : (
          <></>
        )}
      </List>
      <Modal
        // hideBackdrop
        open={showModal}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Typography>Compare</Typography>
            <Box display="flex">
              {comparedItems.map((x) => (
                <Grid container>
                  <Grid item>
                    <p>Provider Name </p>
                    <p>{x.provider_name}</p>
                  </Grid>
                  <Grid item>
                    <p>Rating </p>
                    <p>{x.provider_rating}</p>
                  </Grid>
                  {/* <Grid item>Set up {x.set_up_cost}</Grid> */}
                </Grid>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Drawer>

    // </Box>
  );
}
