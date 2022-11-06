import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useCallback, useContext, useState } from "react";
import { ColorContext } from "../Context/ColorContext";
import ResultNotification from "./ResultNotification";
import { ToastContainer, toast } from "react-toastify";

const Buttons = () => {
  const { buttonColors, containerColor } = useContext(ColorContext);

  const shuffle = useCallback((array: any) => {
    return array.sort(() => Math.random() - 0.5);
  }, []);

  const shuffeledButtonColors = shuffle(buttonColors);
  const [selectedColor, setSelectedColor] = useState<string>("");

  const onSelectColor = useCallback(
    (color: string) => {
      setSelectedColor(color);
    },
    [setSelectedColor]
  );

  // const showNotifications = useCallback(() => {
  //   if (selectedColor === containerColor) {
  //     toast.success("Wow so easy !");
  //   } else {
  //     toast.error("Bad luck");
  //   }
  // }, [selectedColor, containerColor]);

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
