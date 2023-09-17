import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ColorContext } from "../Context/ColorContext";
import { useContext } from "react";
import Score from "./Score";

const ColorContainer = () => {
  const { containerColor } = useContext(ColorContext);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ display: "flex", flexDirection: "row-reverse", p: "1rem" }}
      >
        <Score />
      </Box>
      <Box
        sx={{
          width: {
            sm: 550,
          },
          height: 200,
          backgroundColor: containerColor,
          mt: 5,
          borderRadius: 10,
          borderColor: "black",
        }}
      />
    </Container>
  );
};

export default ColorContainer;
