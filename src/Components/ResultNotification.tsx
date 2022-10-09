import { ToastContainer, toast } from "react-toastify";

const ResultNotification = () => {
  const notify = () => toast.success("Wow so easy !");
  return (
    <>
      <button onClick={notify}>Notify !</button>
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
