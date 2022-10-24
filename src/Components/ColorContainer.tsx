import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect } from "react";

const ColorContainer = () => {
  const colorGenerator = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    console.debug(color);
    return `#${color}`;
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: {
            sm: 550,
          },
          height: 200,
          backgroundColor: colorGenerator(),
          mt: 15,
          borderRadius: 10,
          borderColor: "black",
        }}
      />
    </Container>
  );
};

export default ColorContainer;
