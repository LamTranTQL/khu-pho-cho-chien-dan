import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import aboutImage from "../assets/heroSection.jpg";

const AboutSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const StyledImage = styled("img")({
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: theme.shadows[4],
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  });

  const InfoItem = ({ title, content }) => (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant='subtitle1'
        fontWeight='bold'
        color='primary'
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant='body1'>{content}</Typography>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );

  return (
    <Box
      sx={{
        py: "64px",
        width: "100%",
        backgroundColor: "#ecf0f1",
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
          Tổng Quan Dự Án
        </Typography>

        <Grid
          container
          spacing={6}
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
                lineHeight: 1.3,
              }}
            >
              KHU PHỐ CHỢ CHIÊN ĐÀN - TÂM ĐIỂM MỚI CỦA TAM KỲ
            </Typography>

            <Typography variant='body1' paragraph sx={{ mb: 4 }}>
              Dự án khu phố chợ Chiên Đàn có vị trí đắc địa nằm trên tuyến đường
              Quốc lộ 1A, giáp đường DT615 - Cửa ngõ phía bắc, khu vực tiếp giáp
              với cụm công nghiệp Tam Thăng của Thành phố Tam Kỳ và cụm công
              nghiệp Tam Đàn của huyện Phú Ninh. Dự án sở hữu giá trị của vị trí
              thuận lợi, giá trị của đô thị thương mại - dịch vụ được ví như con
              thuyền lớn đang vươn cao cánh buồm tại vùng đất Quảng Nam.
            </Typography>
            <Box sx={{ position: "relative" }}>
              <StyledImage src={aboutImage} alt='Dự án Khu phố chợ Chiên Đàn' />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  width: "200px",
                  height: "200px",
                  backgroundColor: theme.palette.secondary.light,
                  zIndex: -1,
                  borderRadius: "8px",
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6 }}>
            <Box sx={{ backgroundColor: "#f9f9f9", p: 4, borderRadius: "8px" }}>
              <InfoItem
                title='Vị trí'
                content='Tam Đàn, Phú Ninh, Tam Kỳ, Quảng Nam'
              />
              <InfoItem
                title='Chủ đầu tư uy tín'
                content='Công ty Cổ Phần Địa Ốc Newland Quảng Nam'
              />
              <InfoItem title='Quy mô' content='9.8ha với 327 sản phẩm' />

              <InfoItem
                title='Loại hình'
                content='Đất nền liền kề & Shophouse kinh doanh'
              />
              <InfoItem title='Đường' content='15m5 - 19m - 27m' />
              <InfoItem title='Pháp lý' content='Sở hữu lâu dài' />
              <InfoItem title='Số lượng' content='327 sản phẩm' />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
