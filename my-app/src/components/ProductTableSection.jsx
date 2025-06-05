import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterAlt as FilterIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

import A1008 from "../assets/productImages/A1008.png";
import A1009 from "../assets/productImages/A1009.png";
import A1016 from "../assets/productImages/A1016.png";
import A1017 from "../assets/productImages/A1017.png";
import A1018 from "../assets/productImages/A1018.png";
import A1201 from "../assets/productImages/A1201.png";
import A1204 from "../assets/productImages/A1204.png";
import A1205 from "../assets/productImages/A1205.png";
import A1206 from "../assets/productImages/A1206.png";
import A1207 from "../assets/productImages/A1207.png";
import A1209 from "../assets/productImages/A1209.png";
import A1301 from "../assets/productImages/A1301.png";
import A1302 from "../assets/productImages/A1302.png";
import A1323 from "../assets/productImages/A1323.png";
import A1324 from "../assets/productImages/A1324.png";
import A1411 from "../assets/productImages/A1411.png";
import A1412 from "../assets/productImages/A1412.png";

// Dữ liệu mẫu chi tiết hơn
const landPlotsData = [
  {
    plotNumber: "A10-07",
    area: 120,
    street: 15,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
  },
  {
    plotNumber: "A10-08",
    area: 120,
    street: 15,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1008,
  },
  {
    plotNumber: "A10-09",
    area: 120,
    street: 15,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1009,
  },
  {
    plotNumber: "A10-16",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Đông Nam",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1016,
  },
  {
    plotNumber: "A10-17",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Đông Nam",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1017,
  },
  {
    plotNumber: "A10-18",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Đông Nam",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1018,
  },
  {
    plotNumber: "A12-01",
    area: 180,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1201,
  },
  {
    plotNumber: "A12-04",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1204,
  },
  {
    plotNumber: "A12-05",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1205,
  },
  {
    plotNumber: "A12-06",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1206,
  },
  {
    plotNumber: "A12-07",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1207,
  },
  {
    plotNumber: "A12-09",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1209,
  },
  {
    plotNumber: "A13-01",
    area: 130,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1301,
  },
  {
    plotNumber: "A13-02",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1302,
  },
  {
    plotNumber: "A13-23",
    area: 120,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Nam",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1323,
  },
  {
    plotNumber: "A13-24",
    area: 167,
    street: 7.5,
    status: "Còn hàng",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Bắc",
    direction2: "Tây Nam",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1324,
  },
  {
    plotNumber: "A14-11",
    area: 120,
    street: 7.5,
    status: "Giữ chỗ",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Nam",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1411,
  },
  {
    plotNumber: "A14-12",
    area: 135.16,
    street: 7.5,
    status: "Đã bán",
    location: "Mặt tiền đường chính",
    project: "Khu phố Chợ Chiên Đàn",
    direction: "Tây Nam",
    direction2: "",
    description:
      "Lô đất mặt tiền đường chính, vị trí đắc địa, gần trung tâm thương mại, phù hợp kinh doanh hoặc xây nhà ở.",
    legalStatus: "Sổ đỏ riêng",
    utilities: "Điện, nước, đường nhựa",
    contact: "0899.275.431 - Mr. Lâm",
    image: A1412,
  },
];

const statusOptions = ["Tất cả", "Còn hàng", "Đã bán", "Giữ chỗ"];
const directionOptions = [
  "Tất cả",
  "Đông",
  "Tây",
  "Nam",
  "Bắc",
  "Đông Bắc",
  "Tây Bắc",
  "Đông Nam",
  "Tây Nam",
];

const ProductTableSection = () => {
  const theme = useTheme();
  // eslint-disable-next-line no-unused-vars
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State cho pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // State cho bộ lọc
  const [filters, setFilters] = useState({
    plotNumber: "",
    street: "",
    minArea: "",
    maxArea: "",
    status: "Tất cả",
    direction: "Tất cả",
  });

  // State cho dialog chi tiết
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  // Xử lý thay đổi pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    setPage(0); // Reset về trang đầu khi thay đổi bộ lọc
  };

  // Reset bộ lọc
  const resetFilters = () => {
    setFilters({
      plotNumber: "",
      street: "",
      minArea: "",
      maxArea: "",
      status: "Tất cả",
      direction: "Tất cả",
    });
  };

  // Lọc dữ liệu
  const filteredPlots = landPlotsData.filter((plot) => {
    return (
      plot.plotNumber
        .toLowerCase()
        .includes(filters.plotNumber.toLowerCase()) &&
      (filters.status === "Tất cả" || plot.status === filters.status) &&
      (filters.direction === "Tất cả" ||
        plot.direction === filters.direction ||
        plot.direction2 === filters.direction) &&
      (filters.street === "" || plot.street === Number(filters.street)) &&
      (filters.minArea === "" || plot.area >= Number(filters.minArea)) &&
      (filters.maxArea === "" || plot.area <= Number(filters.maxArea))
    );
  });

  // Hiển thị status bằng Chip
  const renderStatus = (status) => {
    let color;
    switch (status) {
      case "Còn hàng":
        color = "success";
        break;
      case "Đã bán":
        color = "error";
        break;
      case "Giữ chỗ":
        color = "warning";
        break;
      default:
        color = "default";
    }
    return <Chip label={status} color={color} size='small' />;
  };

  // Mở dialog chi tiết
  const handleOpenDialog = (plot) => {
    setSelectedPlot(plot);
    setOpenDialog(true);
  };

  // Đóng dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      id='product'
      sx={{
        py: "64px",
        width: "100%",
        backgroundColor: "#ecf0f1",
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          component='h2'
          gutterBottom
          align='center'
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Bảng Hàng Đất Nền Dự Án
        </Typography>
        <Typography
          variant='h5'
          align='center'
          sx={{ mb: 4, color: "text.secondary" }}
        >
          Khu Phố Chợ Chiên Đàn
        </Typography>

        {/* Bộ lọc */}
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography
            variant='h6'
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <FilterIcon sx={{ mr: 1 }} /> Bộ Lọc
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Mã lô'
                name='plotNumber'
                value={filters.plotNumber}
                onChange={handleFilterChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                fullWidth
                label='Tình trạng'
                name='status'
                value={filters.status}
                onChange={handleFilterChange}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                select
                fullWidth
                label='Hướng'
                name='direction'
                value={filters.direction}
                onChange={handleFilterChange}
              >
                {directionOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box display='flex' gap={1}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={resetFilters}
                  fullWidth
                >
                  Reset
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Đường'
                name='street'
                type='number'
                value={filters.street}
                onChange={handleFilterChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Diện tích từ (m²)'
                name='minArea'
                type='number'
                value={filters.minArea}
                onChange={handleFilterChange}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <TextField
                fullWidth
                label='Diện tích đến (m²)'
                name='maxArea'
                type='number'
                value={filters.maxArea}
                onChange={handleFilterChange}
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Bảng dữ liệu */}
        <Paper elevation={3} sx={{ p: 2 }}>
          <TableContainer sx={{ maxWidth: "100%", overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    bgcolor: "primary.main",
                    "& th": { color: "common.white" },
                  }}
                >
                  <TableCell>Mã Lô</TableCell>
                  <TableCell align='right'>Diện tích (m²)</TableCell>
                  <TableCell align='right'>Mặt cắt đường</TableCell>
                  <TableCell align='center'>Hướng</TableCell>
                  <TableCell align='center'>Tình trạng</TableCell>
                  <TableCell align='center'>Chi tiết</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPlots
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((plot) => (
                    <TableRow key={plot.id} hover>
                      <TableCell>{plot.plotNumber}</TableCell>
                      <TableCell align='right'>{plot.area}</TableCell>
                      <TableCell align='right'>{`${plot.street}m`}</TableCell>
                      <TableCell align='center'>
                        {plot.direction2
                          ? `${plot.direction} - ${plot.direction2}`
                          : `${plot.direction}`}
                      </TableCell>
                      <TableCell align='center'>
                        {renderStatus(plot.status)}
                      </TableCell>
                      <TableCell align='center'>
                        <Button
                          variant='outlined'
                          size='small'
                          onClick={() => handleOpenDialog(plot)}
                          sx={{
                            textTransform: "none",
                            fontWeight: 500,
                          }}
                        >
                          Xem thêm
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {filteredPlots.length === 0 && (
            <Box sx={{ p: 3, textAlign: "center" }}>
              <Typography variant='body1' color='text.secondary'>
                Không tìm thấy lô đất nào phù hợp với tiêu chí lọc
              </Typography>
            </Box>
          )}

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component='div'
            count={filteredPlots.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage='Số hàng mỗi trang:'
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} trong ${count}`
            }
          />
        </Paper>
      </Container>

      {/* Dialog chi tiết */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth='md'
        fullWidth
      >
        <DialogTitle>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography variant='h6'>
              Chi tiết lô đất {selectedPlot?.plotNumber}
            </Typography>
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {selectedPlot && (
            <Box container>
              <Grid container spacing={3}>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <img width={"100%"} src={selectedPlot?.image} />
                </Grid>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <Typography variant='subtitle1' gutterBottom>
                    <strong>Thông tin cơ bản</strong>
                  </Typography>
                  <Box component='ul' sx={{ pl: 2 }}>
                    <li>
                      <strong>Dự án:</strong> {selectedPlot.project}
                    </li>
                    <li>
                      <strong>Vị trí:</strong> {selectedPlot.location}
                    </li>
                    <li>
                      <strong>Diện tích:</strong> {selectedPlot.area}m²
                    </li>
                    <li>
                      <strong>Mặt cắt đường:</strong> {selectedPlot.street}m
                    </li>
                    <li>
                      <strong>Hướng:</strong> {selectedPlot.direction}
                    </li>
                    <li>
                      <strong>Tình trạng pháp lý:</strong>{" "}
                      {selectedPlot.legalStatus}
                    </li>
                    <li>
                      <strong>Tiện ích:</strong> {selectedPlot.utilities}
                    </li>
                  </Box>
                </Grid>
              </Grid>

              <Box mt={4}>
                <Typography variant='subtitle1' gutterBottom>
                  <strong>Mô tả chi tiết</strong>
                </Typography>
                <Typography paragraph>{selectedPlot.description}</Typography>

                <Typography variant='subtitle1' gutterBottom sx={{ mt: 2 }}>
                  <strong>Liên hệ</strong>
                </Typography>
                <Typography>{selectedPlot.contact}</Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Đóng
          </Button>
          <Button variant='contained' color='primary' href='tel:0899275431'>
            Liên hệ ngay
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProductTableSection;
