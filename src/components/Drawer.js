import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ProviderInfo from "./ProviderInfo";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Divider from "@mui/material/Divider";
import TableBody from "@mui/material/TableBody";
import { Typography } from "@mui/material";

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
    minWidth: 400,
    maxWidth: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const StyledTableBody = styled(TableBody)(({ theme }) => ({
    "&": {
      borderRight: "1px solid gray",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      borderRight: 0,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: "8px 48px",
    },
  }));
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
            <Typography component="h1" variant="h5" mb={2}>
              Compare
            </Typography>
            <Divider />
            <Box display="flex">
              {comparedItems.map((x) => (
                <StyledTableBody>
                  <StyledTableRow>
                    <StyledTableCell>Provider Name</StyledTableCell>
                    <StyledTableCell>{x.provider_name}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Monthly Cost</StyledTableCell>
                    <StyledTableCell>{x.monthly_price}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Tariff Type</StyledTableCell>
                    <StyledTableCell>{x.provider_name}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Speed</StyledTableCell>
                    <StyledTableCell>{x.internet_speed} Mbps</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Set Up Cost</StyledTableCell>
                    <StyledTableCell>£{x.set_up_cost}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>One Off Cost</StyledTableCell>
                    <StyledTableCell>£{x.set_up_cost}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Term End</StyledTableCell>
                    <StyledTableCell>{x.contract_info} Months</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Data Limits</StyledTableCell>
                    <StyledTableCell>{x.data_limits} </StyledTableCell>
                  </StyledTableRow>
                </StyledTableBody>
              ))}
            </Box>
          </Box>
        </Box>
      </Modal>
    </Drawer>

    // </Box>
  );
}
/* <Grid container>
                  <Grid item>
                    <p>Provider Name </p>
                    <p>{x.provider_name}</p>
                  </Grid>
                  <Grid item>
                    <p>Rating </p>
                    <p>{x.provider_rating}</p>
                  </Grid>
              
                </Grid> */
