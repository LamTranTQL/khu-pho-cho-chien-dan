import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CustomSection = ({ id, children, paddingTop }) => {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: { paddingTop }, // Thêm padding top để tránh bị header che
        scrollMarginTop: "64px", // Đảm bảo scroll không bị che bởi header fixed
      }}
    >
      {children}
    </Box>
  );
};

CustomSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CustomSection;
