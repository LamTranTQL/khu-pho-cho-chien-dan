import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import heroImage from "../assets/heroSection.jpg";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gửi dữ liệu đến Google Sheet thông qua Google Apps Script
    try {
      const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", contact: "" });

        // Gửi email thông báo (tuỳ chọn)
        await emailjs.send(
          "YOUR_EMAILJS_SERVICE_ID",
          "YOUR_EMAILJS_TEMPLATE_ID",
          formData,
          "YOUR_EMAILJS_USER_ID"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        paddingTop: "64px", // Thêm padding top để tránh bị header che
        scrollMarginTop: "64px",
        height: "100vh",
        minHeight: "600px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: theme.spacing(4),
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={6} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component='h1'
              gutterBottom
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 3,
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              Khu phố chợ Chiên Đàn
            </Typography>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              component='h2'
              sx={{
                mb: 4,
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Vị trí vàng - Tiện ích đẳng cấp - Giá trị bền vững
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: 2,
                padding: theme.spacing(4),
                boxShadow: 3,
                color: theme.palette.text.primary,
              }}
            >
              <Typography
                variant='h5'
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Đăng ký nhận tư vấn
              </Typography>

              {submitted ? (
                <Typography color='success.main' sx={{ mb: 2 }}>
                  Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.
                </Typography>
              ) : (
                <>
                  <TextField
                    fullWidth
                    label='Họ và tên'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    margin='normal'
                    required
                    variant='outlined'
                  />

                  <TextField
                    fullWidth
                    label='Email/Số điện thoại'
                    name='contact'
                    value={formData.contact}
                    onChange={handleChange}
                    margin='normal'
                    required
                    variant='outlined'
                    sx={{ mt: 2 }}
                  />

                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    size='large'
                    sx={{ mt: 3, py: 2 }}
                  >
                    Đăng ký ngay
                  </Button>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
