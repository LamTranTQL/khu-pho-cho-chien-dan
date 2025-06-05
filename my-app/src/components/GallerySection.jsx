import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

const GallerySection = () => {
  const theme = useTheme();

  const externalBaseUrl =
    "https://momento360.com/e/u/86f5ef8041b5459190696f2a55c2826d?utm_campaign=embed&utm_source=other&size=medium&display-plan=true";

  return (
    <Box
      sx={{
        py: "64px",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          component='h2'
          align='center'
          sx={{
            mb: 8,
            fontWeight: 700,
            color: theme.palette.primary.main,
            position: "relative",
            "&:after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              margin: "20px auto 0",
            },
          }}
        >
          HÌNH ẢNH DỰ ÁN
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: "500px",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            bgcolor: "background.paper",
          }}
        >
          <iframe
            src={externalBaseUrl}
            title='360 Panorama'
            allowFullScreen
            allow='xr-spatial-tracking; fullscreen'
            frameBorder='0'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "0",
            }}
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default GallerySection;
