import { ToastContainer, toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { ColorContext } from "../Context/ColorContext";

const ResultNotification = () => {
  const {
    containerColor,
    selectedColor,
    setSelectedColor,
    setContainerColor,
    setButtonColors,
    setScore,
    score
  } = useContext(ColorContext);

  console.log("container color", containerColor);
  console.log("selected color", selectedColor);

  useEffect(()=>{
    if (selectedColor !== "") {
    if (containerColor === selectedColor) {
      toast.success("You got it right!");
      setSelectedColor("");
      setContainerColor();
      setButtonColors();
      handleIncrementScore(score)
    } else {
      toast.error("Bad luck. Try again");
      handlePenaltyScore(score)
    }
  }
  },[selectedColor]);

  const handleIncrementScore = (value: number) => {
    value += 10;
    setScore(value)
  }

  const handlePenaltyScore = (value: number) => {
    value -= 5;
    if(value < 0){
      value = 0
    }
    setScore(value)
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ResultNotification;
