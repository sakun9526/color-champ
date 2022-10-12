import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Colors from './utils/Colors.json';
import { useEffect } from 'react';

const ColorContainer = () => {
  useEffect(() => {
    Colors.map((color) => {
      console.log(color.color);
    });
  });
  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          width: {
            sm: 550,
          },
          height: 200,
          backgroundColor: Colors[2].color,
          mt: 15,
          borderRadius: 10,
        }}
      />
    </Container>
  );
};

export default ColorContainer;
