import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { ColorContext } from '../Context/ColorContext';

const ResultNotification = () => {
  const notify = () => toast.success('Wow so easy !');
  const { containerColor, selectedColor } = useContext(ColorContext);

  console.log('container color', containerColor);
  console.log('selected color', selectedColor);

  if (selectedColor != '') {
    if (containerColor === selectedColor) {
      toast.success('Wow so easy !');
    } else {
      toast.error('Bad luck');
    }
  }

  return (
    <>
      <ToastContainer
        position='top-center'
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
