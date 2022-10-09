import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const ColorContainer = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: {
            sm: 550,
          },
          height: 200,
          backgroundColor: "#3B6078",
          mt: 15,
          borderRadius: 10,
        }}
      />
    </Container>
  );
};

export default ColorContainer;
