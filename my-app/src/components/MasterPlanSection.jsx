import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  Dialog,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CloseIcon from "@mui/icons-material/Close";
import MasterPlan from "../assets/master-plan.png";
import ToanCanhDuAn from "../assets/phoi-canh.jpg";
import KhanhThanhCho from "../assets/khanh-thanh-cho.jpg";

const MasterPlanSection = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpenImage = (imgSrc) => {
    setSelectedImage(imgSrc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const LayoutImage = styled("img")({
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: theme.shadows[4],
    transition: "transform 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.02)",
    },
  });

  const LayoutItem = ({ title, description, imgSrc, margin }) => (
    <Box sx={{ mb: margin }}>
      <Typography
        variant='h6'
        component='h3'
        sx={{ mb: 2, color: theme.palette.primary.main }}
      >
        {title}
      </Typography>
      <Box sx={{ position: "relative" }}>
        <LayoutImage
          src={imgSrc}
          alt={title}
          onClick={() => handleOpenImage(imgSrc)}
        />
        <IconButton
          sx={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
            },
          }}
          onClick={() => handleOpenImage(imgSrc)}
        >
          <ZoomInIcon />
        </IconButton>
      </Box>
      {description && (
        <Typography variant='body1' sx={{ mt: 2 }}>
          {description}
        </Typography>
      )}
    </Box>
  );

  const zoningInfo = [
    {
      title: "Khu thương mại - dịch vụ",
      area: "10.144m2",
      percentage: "10.5%",
      description:
        "Bao gồm shophouse, chợ truyền thống và trung tâm thương mại",
    },
    {
      title: "Khu dân cư",
      percentage: "41.5%",
      area: "40.895m2",
      description: "Các lô đất liền kề với đầy đủ tiện ích",
    },
    {
      title: "Đất cây xanh",
      percentage: "4%",
      area: "3.800m2",
      description: "Hệ thống công viên nội khu và không gian công cộng",
    },
    {
      title: "Đất xây dựng hạ tầng kỹ thuật chung",
      percentage: "44%",
      area: "43.605 m2",
      description: "Công viên, khu vui chơi, bãi đỗ xe",
    },
  ];

  return (
    <Box
      id='master-plan'
      sx={{
        py: "64px",
        width: "100%",
        backgroundColor: "#ffffff",
        scrollMarginTop: "80px",
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
          Mặt Bằng Dự Án
        </Typography>

        <Box container>
          <LayoutItem
            title='Master Plan Toàn Khu'
            description='Tổng thể dự án với quy hoạch đồng bộ, phân khu chức năng rõ ràng, hệ thống giao thông nội khu thuận tiện.'
            imgSrc={MasterPlan}
            margin={4}
          />
          <Grid container spacing={3}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <LayoutItem
                title='Toàn cảnh chợ Chiên Đàn'
                imgSrc={ToanCanhDuAn}
                description=''
                margin={4}
              />
              <LayoutItem
                title='Khánh thành chợ Chiên Đàn'
                imgSrc={KhanhThanhCho}
                description=''
                margin={0}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  backgroundColor: "#f5f7fa",
                  p: 4,
                  borderRadius: "8px",
                  height: "100%",
                  boxShadow: 1,
                }}
              >
                <Typography
                  variant='h5'
                  component='h3'
                  sx={{ mb: 4, fontWeight: 600 }}
                >
                  Thông Tin Quy Hoạch
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant='subtitle1'
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Phân Khu Chức Năng
                  </Typography>
                  {zoningInfo.map((zone, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant='body1' fontWeight='500'>
                          {zone.title}
                        </Typography>
                        <Typography variant='body1' color='primary'>
                          {zone.area}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "8px",
                          backgroundColor: "#e0e0e0",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            width: zone.percentage,
                            height: "100%",
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "4px",
                          }}
                        />
                      </Box>
                      <Typography
                        variant='body2'
                        sx={{ mt: 1, color: "text.secondary" }}
                      >
                        {zone.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box>
                  <Typography
                    variant='subtitle1'
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Thông Số Kỹ Thuật
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Diện tích tổng:
                      </Typography>
                      <Typography variant='body1'>9.8ha</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Mật độ xây dựng:
                      </Typography>
                      <Typography variant='body1'>65%</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Tổng sản phẩm:
                      </Typography>
                      <Typography variant='body1'>327 lô</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Đường nội bộ:
                      </Typography>
                      <Typography variant='body1'>7m5, 9m5, 15m</Typography>
                    </Grid>
                  </Grid>
                  <Box container mt={2}>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>
                      Sản phẩm của dự án Khu phố chợ Chiên Đàn là 326 lô đất
                      nền, diện tích từ 100 – 120 m2.
                    </Typography>
                    <Typography variant='body1' mt={1} sx={{ fontWeight: 500 }}>
                      Khu Phố chợ Chiên Đàn có tổng diện tích chợ hơn 4.700 m2,
                      xây dựng chợ đầu mối Chiên Đàn gồm:
                    </Typography>
                    <Typography
                      variant='body1'
                      mt={1}
                      ml={4}
                      sx={{ fontWeight: 500 }}
                    >
                      - Nhà chợ chính 2 tầng, diện tích 1.327m2
                    </Typography>
                    <Typography
                      variant='body1'
                      mt={1}
                      ml={4}
                      sx={{ fontWeight: 500 }}
                    >
                      - Nhà chợ phụ, diện tích 1.023m2
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* <Grid container spacing={6}>
          <Grid item size={{ xs: 12 }}>
            <LayoutItem
              title='Master Plan Toàn Khu'
              description='Tổng thể dự án với quy hoạch đồng bộ, phân khu chức năng rõ ràng, hệ thống giao thông nội khu thuận tiện.'
              imgSrc={MasterPlan}
              margin={4}
            />

            {!isMobile && (
              <Grid container spacing={3}>
                <Grid item size={{ xs: 6 }}>
                  <LayoutItem
                    title='Toàn cảnh chợ Chiên Đàn'
                    imgSrc={ToanCanhDuAn}
                    description=''
                    margin={4}
                  />
                  <LayoutItem
                    title='Khánh thành chợ Chiên Đàn'
                    imgSrc={KhanhThanhCho}
                    description=''
                    margin={0}
                  />
                </Grid>
                <Grid item size={{ xs: 6 }}>
                  <Box
                    sx={{
                      backgroundColor: "#f5f7fa",
                      p: 4,
                      borderRadius: "8px",
                      height: "100%",
                      boxShadow: 1,
                    }}
                  >
                    <Typography
                      variant='h5'
                      component='h3'
                      sx={{ mb: 4, fontWeight: 600 }}
                    >
                      Thông Tin Quy Hoạch
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant='subtitle1'
                        sx={{ mb: 2, fontWeight: 600 }}
                      >
                        Phân Khu Chức Năng
                      </Typography>
                      {zoningInfo.map((zone, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              mb: 1,
                            }}
                          >
                            <Typography variant='body1' fontWeight='500'>
                              {zone.title}
                            </Typography>
                            <Typography variant='body1' color='primary'>
                              {zone.percentage}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              height: "8px",
                              backgroundColor: "#e0e0e0",
                              borderRadius: "4px",
                              overflow: "hidden",
                            }}
                          >
                            <Box
                              sx={{
                                width: zone.percentage,
                                height: "100%",
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: "4px",
                              }}
                            />
                          </Box>
                          <Typography
                            variant='body2'
                            sx={{ mt: 1, color: "text.secondary" }}
                          >
                            {zone.description}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box>
                      <Typography
                        variant='subtitle1'
                        sx={{ mb: 2, fontWeight: 600 }}
                      >
                        Thông Số Kỹ Thuật
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant='body2' sx={{ fontWeight: 500 }}>
                            Diện tích tổng:
                          </Typography>
                          <Typography variant='body1'>9.8ha</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant='body2' sx={{ fontWeight: 500 }}>
                            Mật độ xây dựng:
                          </Typography>
                          <Typography variant='body1'>65%</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant='body2' sx={{ fontWeight: 500 }}>
                            Tổng sản phẩm:
                          </Typography>
                          <Typography variant='body1'>327 lô</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant='body2' sx={{ fontWeight: 500 }}>
                            Đường nội bộ:
                          </Typography>
                          <Typography variant='body1'>7m5, 9m5, 15m</Typography>
                        </Grid>
                      </Grid>
                      <Box container mt={2}>
                        <Typography variant='body1' sx={{ fontWeight: 500 }}>
                          Sản phẩm của dự án Khu phố chợ Chiên Đàn là 326 lô đất
                          nền, diện tích từ 100 – 120 m2.
                        </Typography>
                        <Typography
                          variant='body1'
                          mt={1}
                          sx={{ fontWeight: 500 }}
                        >
                          Khu Phố chợ Chiên Đàn có tổng diện tích chợ hơn 4.700
                          m2, xây dựng chợ đầu mối Chiên Đàn gồm:
                        </Typography>
                        <Typography
                          variant='body1'
                          mt={1}
                          ml={4}
                          sx={{ fontWeight: 500 }}
                        >
                          - Nhà chợ chính 2 tầng, diện tích 1.327m2
                        </Typography>
                        <Typography
                          variant='body1'
                          mt={1}
                          ml={4}
                          sx={{ fontWeight: 500 }}
                        >
                          - Nhà chợ phụ, diện tích 1.023m2
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            )}
          </Grid>

          {isMobile && (
            <Box>
              <Box
                sx={{
                  backgroundColor: "#f5f7fa",
                  p: 4,
                  borderRadius: "8px",
                  height: "100%",
                  boxShadow: 1,
                }}
              >
                <Typography
                  variant='h5'
                  component='h3'
                  sx={{ mb: 4, fontWeight: 600 }}
                >
                  Thông Tin Quy Hoạch
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant='subtitle1'
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Phân Khu Chức Năng
                  </Typography>
                  {zoningInfo.map((zone, index) => (
                    <Box key={index} sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 1,
                        }}
                      >
                        <Typography variant='body1' fontWeight='500'>
                          {zone.title}
                        </Typography>
                        <Typography variant='body1' color='primary'>
                          {zone.percentage}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          height: "8px",
                          backgroundColor: "#e0e0e0",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            width: zone.percentage,
                            height: "100%",
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "4px",
                          }}
                        />
                      </Box>
                      <Typography
                        variant='body2'
                        sx={{ mt: 1, color: "text.secondary" }}
                      >
                        {zone.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box>
                  <Typography
                    variant='subtitle1'
                    sx={{ mb: 2, fontWeight: 600 }}
                  >
                    Thông Số Kỹ Thuật
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Diện tích tổng:
                      </Typography>
                      <Typography variant='body1'>9.8ha</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Mật độ xây dựng:
                      </Typography>
                      <Typography variant='body1'>65%</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Tổng sản phẩm:
                      </Typography>
                      <Typography variant='body1'>327 lô</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant='body2' sx={{ fontWeight: 500 }}>
                        Đường nội bộ:
                      </Typography>
                      <Typography variant='body1'>7m5, 9m5, 15m</Typography>
                    </Grid>
                  </Grid>
                  <Box container mt={2}>
                    <Typography variant='body1' sx={{ fontWeight: 500 }}>
                      Sản phẩm của dự án Khu phố chợ Chiên Đàn là 326 lô đất
                      nền, diện tích từ 100 – 120 m2.
                    </Typography>
                    <Typography variant='body1' mt={1} sx={{ fontWeight: 500 }}>
                      Khu Phố chợ Chiên Đàn có tổng diện tích chợ hơn 4.700 m2,
                      xây dựng chợ đầu mối Chiên Đàn gồm:
                    </Typography>
                    <Typography
                      variant='body1'
                      mt={1}
                      ml={4}
                      sx={{ fontWeight: 500 }}
                    >
                      - Nhà chợ chính 2 tầng, diện tích 1.327m2
                    </Typography>
                    <Typography
                      variant='body1'
                      mt={1}
                      ml={4}
                      sx={{ fontWeight: 500 }}
                    >
                      - Nhà chợ phụ, diện tích 1.023m2
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Grid container spacing={3}>
                <Grid item size={{ xs: 12 }}>
                  <LayoutItem
                    title='Toàn cảnh chợ Chiên Đàn'
                    imgSrc={ToanCanhDuAn}
                    description=''
                    margin={2}
                  />
                </Grid>
                <Grid item size={{ xs: 12 }}>
                  <LayoutItem
                    title='Khánh thành chợ Chiên Đàn'
                    imgSrc={KhanhThanhCho}
                    description=''
                    margin={2}
                  />
                </Grid>
              </Grid>
            </Box>
          )}
        </Grid> */}
      </Container>

      {/* Dialog xem ảnh lớn */}
      <Dialog open={open} onClose={handleClose} maxWidth='lg' fullWidth>
        <IconButton
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <img
          src={selectedImage}
          alt='Master plan'
          style={{ width: "100%", height: "auto" }}
        />
      </Dialog>
    </Box>
  );
};

export default MasterPlanSection;
