import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useCallback, useContext } from "react";
import { ColorContext } from "../Context/ColorContext";

const Buttons = () => {
  const { buttonColors, setSelectedColor } = useContext(ColorContext);

  const shuffle = useCallback((array: any) => {
    return array.sort(() => Math.random() - 0.5);
  }, []);

  const shuffeledButtonColors = shuffle(buttonColors);

  const onSelectColor = useCallback(
    (color: string) => {
      setSelectedColor(color);
    },
    [setSelectedColor]
  );

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 2,
          width: {
            sm: 550,
          },
          justifyContent: "space-between",
          mt: 5,
        }}
      >
        {shuffeledButtonColors.map((color: string) => {
          return (
            <Button
              variant="contained"
              key={color}
              onClick={() => onSelectColor(color)}
            >
              {color}
            </Button>
          );
        })}
      </Box>
    </Container>
  );
};

export default Buttons;
