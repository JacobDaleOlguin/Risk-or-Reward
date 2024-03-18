import React, { useState } from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';

function PurchaseContainer() {
  const [eth, setEth] = useState('');
  const [ror, setRor] = useState('');

  const ethToRorRatio = 25000000; // 1 ETH = 25,000,000 ROR

  const handleEthChange = (e) => {
    const ethValue = e.target.value;
    if (ethValue.match(/^\d*\.?\d{0,9}$/)) {
      setEth(ethValue);
      const rorValue = ethValue * ethToRorRatio;
      setRor(rorValue.toString().slice(0, 10));
    }
  };

  const handleRorChange = (e) => {
    const rorValue = e.target.value;
    if (rorValue.match(/^\d*\.?\d{0,9}$/)) {
      setRor(rorValue);
      const ethValue = rorValue / ethToRorRatio;
      setEth(ethValue.toString().slice(0, 10));
    }
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Calculate Your Purchase
      </Typography>
      <TextField
        label="ETH"
        variant="outlined"
        value={eth}
        onChange={handleEthChange}
        InputProps={{
          endAdornment: <Typography variant="body1">ETH</Typography>,
        }}
        type="text"
      />
      <TextField
        label="ROR"
        variant="outlined"
        value={ror}
        onChange={handleRorChange}
        InputProps={{
          endAdornment: <Typography variant="body1">ROR</Typography>,
        }}
        type="text"
      />
    </Paper>
  );
}

export default PurchaseContainer;
