import { useContext } from "react";
import { ColorContext } from "../Context/ColorContext";

const Score = () => {
  const { score } = useContext(ColorContext);
  console.log({score})

  return <h3>Your Score is {score}</h3>;
};

export default Score;
