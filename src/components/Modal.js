import React from "react";
import ProviderInfo from "./ProviderInfo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Modal from "@mui/material/Modal";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function MyModal({ comparedItems, open, onClose, setShowModal }) {
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
      borderRight: "1px solid purple",
    },
    // hide last border
    "&:last-child , &:last-child ": {
      borderRight: "none",
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
    <Modal
      // hideBackdrop
      open={open}
      onClose={onClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={style}>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Typography component="h1" variant="h5" mb={2}>
              Compare
            </Typography>
            {/* <button onClick={onClose}>Close</button> */}
          </Box>

          <Divider />
          <Box display="flex" sx={{ overflow: "auto" }}>
            {comparedItems.map((item) => {
              const miao = [
                {
                  detail: `?? ${item.monthly_price}`,
                  detailDescription: "Monthly Cost",
                },
                {
                  detail: `${item.internet_speed} Mbps`,
                  detailDescription: `${item.broadband_type} Speed`,
                },
                {
                  detail: `?? ${item.set_up_cost}`,
                  detailDescription: "Setup Costs",
                },
                {
                  detail: `${item.contract_info}`,
                  detailDescription: "Term End",
                },
                {
                  detail: `${item.data_limits}`,
                  detailDescription: "Data Limits",
                },
              ];

              return (
                <StyledTableBody>
                  <Box p={2}>
                    <ProviderInfo
                      provider_name={item.provider_name}
                      provider_logo_image_url={item.provider_logo_image_url}
                      deal_name={item.deal_name}
                    />
                  </Box>
                  {miao.map((x) => (
                    <StyledTableRow>
                      <StyledTableCell>{x.detailDescription}</StyledTableCell>
                      <StyledTableCell>{x.detail}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </StyledTableBody>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default MyModal;
