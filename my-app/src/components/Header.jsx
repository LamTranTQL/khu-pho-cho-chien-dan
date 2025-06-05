import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Hiệu ứng thay đổi màu header khi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Danh sách các section
  const navItems = [
    { id: "home", label: "Trang chủ" },
    { id: "about", label: "Giới thiệu" },
    { id: "location", label: "Vị trí" },
    { id: "feature", label: "Tiện ích" },
    { id: "master-plan", label: "Mặt Bằng" },
    { id: "product", label: "Bảng hàng" },
    { id: "utilities", label: "Hình ảnh" },
  ];

  const phoneNumber = "0899275431"; // Số điện thoại của bạn

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Drawer cho mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            offset={-70} // Điều chỉnh vị trí dừng khi scroll
          >
            <ListItem button>
              <ListItemText primary={item.label} />
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          backgroundColor: "rgba(25, 118, 210, 0.9)",
          boxShadow: scrolled ? 1 : 0,
          transition: "all 0.3s ease",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Menu desktop - ẩn trên mobile */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  <Button sx={{ color: "#fff", fontWeight: 700 }}>
                    {item.label}
                  </Button>
                </ScrollLink>
              ))}
            </Box>

            {/* Nút menu mobile - chỉ hiển thị trên mobile */}
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* CTA */}
            <Button
              variant='contained'
              color='secondary'
              startIcon={<PhoneIcon />}
              onClick={handleCallClick}
              sx={{
                ml: 2,
                backgroundColor: "#f4d03f",
                "&:hover": {
                  backgroundColor: "#f39c12",
                },
              }}
            >
              Gọi ngay
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
