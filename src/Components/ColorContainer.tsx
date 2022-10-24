import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { ColorsDigits } from './utils/ColorsDigits';

const ColorContainer = () => {
  const [color, setColor] = useState('');

  const colorGenerator = () => {
    const randomColor = new Array(6)
      .fill('')
      .map(() => {
        return ColorsDigits[Math.floor(Math.random() * ColorsDigits.length)];
      })
      .join('');
    console.log(randomColor);
    return `#${randomColor}`;
  };

  useEffect(() => {
    setColor(colorGenerator());
  }, []);

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          width: {
            sm: 550,
          },
          height: 200,
          backgroundColor: color,
          mt: 15,
          borderRadius: 10,
          borderColor: 'black',
        }}
      />
    </Container>
  );
};

export default ColorContainer;
