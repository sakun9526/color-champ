import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
 
  return (
    <Box
      component="footer"
      sx={{
        py: 1.5,
        backgroundColor: "#acb9ce", //#304146
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: "Inter", fontWeight: "600" }}
        >
          &copy; {`Copyright ${new Date().getFullYear()}. All rights received`}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontFamily: "Inter", fontWeight: "600" }}
        >
          Designed by{" "}
          <a
            href="https://sakun9526.github.io/"
            style={{ textDecoration: "none", color: 'inherit' }}
          >
            Sakun Rathnayaka
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
