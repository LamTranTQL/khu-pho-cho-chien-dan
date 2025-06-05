import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { styled } from "@mui/material/styles";
// import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const LocationSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id='location'
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
          Vị Trí Dự Án
        </Typography>

        <Grid
          container
          spacing={6}
          alignItems='center'
          direction={isMobile ? "column-reverse" : "row"}
        >
          <Grid item size={{ xs: 12, sm: 6 }}>
            <Typography
              variant='h4'
              component='h3'
              sx={{
                mb: 4,
                fontWeight: 600,
                color: theme.palette.text.primary,
              }}
            >
              KẾT NỐI ĐA CHIỀU - TIỆN ÍCH VƯỢT TRỘI
            </Typography>

            <Typography variant='body1' paragraph sx={{ mb: 3 }}>
              Dự án tọa lạc tại vị trí đắc địa trên trục đường Quốc lộ 1A, giáp
              đường DT615 - cửa ngõ phía Bắc thành phố Tam Kỳ, tỉnh Quảng Nam.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon color='primary' sx={{ mr: 2 }} />
                <Typography variant='body1'>
                  <strong>Địa chỉ:</strong> Tam Đàn, Phú Ninh, Tam Kỳ, Quảng Nam
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <LocationOnIcon color='primary' sx={{ mr: 2 }} />
                <Typography variant='body1'>
                  <strong>Tiếp giáp:</strong> Cụm công nghiệp Tam Thăng của
                  Thành phố Tam Kỳ và cụm công nghiệp Tam Đàn của huyện Phú Ninh
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon color='primary' sx={{ mr: 2 }} />
                <Typography variant='body1'>
                  <strong>Kết nối:</strong> Quốc lộ 1A, đường DT615, thuận tiện
                  di chuyển đến Đà Nẵng, Chu Lai
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Box
              position='relative'
              sx={{ minWidth: "300px", height: "400px" }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.972377032002!2d108.45485537386315!3d15.593124652010182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169ddc051bfcebd%3A0x4ee4d89477cf2896!2zROG7sSDDoW4gS2h1IFBo4buRIENo4bujIENoacOqbiDEkMOgbiwgVHAgVGFtIEvhu7M!5e0!3m2!1svi!2s!4v1747821875494!5m2!1svi!2s'
                style={{ width: "100%", height: "100%", border: 0 }}
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LocationSection;
