import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Buttons = () => {
  const [actualHexValue, setActualHexValue] = useState("");
  const [otherHexValues, setOtherHexValues] = useState([]);
  const [selectedHexValue, setSelectedHexValue] = useState("");
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
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
      </Box>
    </Container>
  );
};

export default Buttons;
