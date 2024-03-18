import React from 'react';
import { Grid, Box, Typography, Paper, LinearProgress } from '@mui/material';
import DevelopmentIcon from '@mui/icons-material/Build'; // Example icon, choose icons relevant to each category
// Import other icons similarly

function InfoContainer() {
  const allocations = [
    { label: 'Development', value: 10, Icon: DevelopmentIcon },
    // Add other allocations with corresponding icons
  ];

  return (
    <Grid item xs={12} md={6}>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px', height: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Allocation of Funds
        </Typography>
        {allocations.map(({ label, value, Icon }) => (
          <Box key={label} mb={2} display="flex" alignItems="center">
            <Icon style={{ marginRight: 10 }} /> {/* Icon */}
            <Typography variant="body1" style={{ flexGrow: 1 }}>
              {value}% {label}
            </Typography>
            <LinearProgress variant="determinate" value={value} style={{ width: '100%' }} />
          </Box>
        ))}
        <Typography variant="h6" mt={2}>Reward for Risk Program</Typography>
        <Typography variant="body1">
          1% of your presale purchase will be rewarded to the purchaser each year on the winter solstice for the next three years (2024, 2025, 2026).
        </Typography>
      </Paper>
    </Grid>
  );
}

export default InfoContainer;
