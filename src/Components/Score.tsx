import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { ColorContext } from "../Context/ColorContext";

const Score = () => {
  const { score } = useContext(ColorContext);

  return (
    <>
      <Typography variant="h5" sx={{ fontFamily: "Inter" }}>
        Your Score : {score}
      </Typography>
    </>
  );
};

export default Score;
