import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Link,
  useTheme,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const FooterSection = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component='footer'
      width={"100%"}
      sx={{
        backgroundColor: theme.palette.grey[900],
        color: "#fff",
        py: 4,
      }}
    >
      <Container maxWidth='lg'>
        {/* Thông tin liên hệ */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            mb: 3,
          }}
        >
          {/* Thông tin công ty */}
          <Box>
            <Typography variant='h6' sx={{ fontWeight: 700, mb: 1 }}>
              KHU PHỐ CHỢ CHIÊN ĐÀN
            </Typography>
            <Typography variant='body2'>
              Vị trí vàng - Tiện ích đẳng cấp - Giá trị bền vững
            </Typography>
          </Box>

          {/* Liên hệ */}
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <LocationOn fontSize='small' />
              <Typography variant='body2'>
                Tam Đàn, Phú Ninh, Tam Kỳ, Quảng Nam
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Phone fontSize='small' />
              <Typography variant='body2'>0899 275 431</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Email fontSize='small' />
              <Typography variant='body2'>
                lamtran.winreal.bds@gmail.com
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 2 }} />

        {/* Bản quyền và liên kết */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant='body2'>
            © {currentYear} Khu Phố Chợ Chiên Đàn. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterSection;
