import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";

const cards = [
  {
    id: 1,
    title: "VỊ TRÍ ĐẮC ĐỊA",
    content: [
      "Nằm ngay trung tâm.",
      "Kết nối dễ dàng với Quốc lộ 40B, TP. Tam Kỳ",
      "Thuận tiện di chuyển đến sân bay Chu Lai, Khu công nghiệp Tam An, Bãi biển Tam Thanh.",
    ],
  },
  {
    id: 2,
    title: "HẠ TẦNG ĐỒNG BỘ",
    content: [
      "Hệ thống đường nội khu rộng, vỉa hè thoáng mát.",
      "Hệ thống điện, nước, cáp ngầm đạt chuẩn.",
      "Thoát nước, chống ngập úng hiệu quả.",
    ],
  },
  {
    id: 3,
    title: "THƯƠNG MẠI – DỊCH VỤ",
    content: [
      "Chợ Chiên Đàn truyền thống – thuận tiện mua sắm, kinh doanh.",
      "Khu phố thương mại sầm uất, đa dạng ngành nghề.",
      "Siêu thị mini, cửa hàng tiện lợi phục vụ nhu cầu hàng ngày.",
    ],
  },
  {
    id: 3,
    title: "Y TẾ – GIÁO DỤC",
    content: [
      "Trường mầm non, tiểu học trong bán kính gần.",
      "Trạm y tế xã Tam An đảm bảo chăm sóc sức khỏe.",
      "Bệnh viện đa khoa khu vực cách đó chỉ 10-15 phút di chuyển.",
    ],
  },
];

const FeatureSection = () => {
  const theme = useTheme();

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
          TIỆN ÍCH NỔI BẬT
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
            gap: 2,
          }}
        >
          {cards.map((item) => (
            <Card>
              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "30px",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  textAlign: "center",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant='h6'
                  fontWeight='bold'
                  color='primary'
                  gutterBottom
                >
                  {item.title}
                </Typography>
                {item.content.map((item) => (
                  <Typography variant='body2'>{item}</Typography>
                ))}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureSection;
