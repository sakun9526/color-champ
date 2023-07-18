import { ToastContainer, toast } from "react-toastify";
import { useContext, memo } from "react";
import { ColorContext } from "../Context/ColorContext";

const ResultNotification = () => {
  const {
    containerColor,
    selectedColor,
    setSelectedColor,
    setContainerColor,
    setButtonColors,
  } = useContext(ColorContext);

  console.log("container color", containerColor);
  console.log("selected color", selectedColor);

  if (selectedColor != "") {
    if (containerColor === selectedColor) {
      toast.success("Wow so easy !");
      setSelectedColor("");
      setContainerColor();
      setButtonColors();
    } else {
      toast.error("Bad luck");
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
