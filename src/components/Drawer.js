import React from "react";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     heigth: `calc(100% - ${drawerWidth}px)`,
//     // marginRight: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

export default function PersistentDrawerLeft({ comparedItems }) {
  //   const theme = useTheme();
  //   const [open, setOpen] = React.useState(false);

  //   const handleDrawerOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  // const elementsInComparison = [{ ...comparedItems }];

  return (
    //     <Box sx={{ display: "flex" }}>
    //       <CssBaseline />
    //       <AppBar position="fixed" open={open}>
    //         <Toolbar>
    //           <IconButton
    //             color="inherit"
    //             aria-label="open drawer"
    //             onClick={handleDrawerOpen}
    //             edge="start"
    //             sx={{ mr: 2, ...(open && { display: "none" }) }}
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //           <Typography variant="h6" noWrap component="div">
    //             Persistent drawer
    //           </Typography>
    //         </Toolbar>
    //       </AppBar>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          maxHeight: "20%",
          height: "250px",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="bottom"
      open={true}
    >
      {/* <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader> */}

      <List sx={{ display: "flex" }}>
        {console.log("in drawer", comparedItems)}
        {comparedItems.map((el, index) => (
          <ListItem key={index}>{el.provider_name}</ListItem>
        ))}
        {/* {elementsInComparison.map((el, index) => (
          <ListItem>{console.log(el.comparedItems[index])}</ListItem>
        ))} */}
      </List>
    </Drawer>

    // </Box>
  );
}
