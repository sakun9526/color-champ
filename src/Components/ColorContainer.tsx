import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ColorContext } from "../Context/ColorContext";
import { useContext } from "react";

const ColorContainer = () => {
  const { containerColor, selectedColor, setContainerColor } =
    useContext(ColorContext);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: {
            sm: 550,
          },
          height: 200,
          backgroundColor: containerColor,
          mt: 15,
          borderRadius: 10,
          borderColor: "black",
        }}
      />
    </Container>
  );
};

export default ColorContainer;
