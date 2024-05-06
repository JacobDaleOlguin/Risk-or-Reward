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
    <Grid item xs={20} md={9}>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px', height: '100%', opacity: .8 }}>
        <Typography variant="h5" gutterBottom>
          Allocation of Funds
        </Typography>
        <Typography variant="h6" mt={2}>Reward for Risk Program</Typography>
        <Typography variant="body1" style={{}}>50% of the total supply is designated for initial sales, intended to be quickly distributed.</Typography>
        <Typography variant="body1" style={{}}>15% is allocated for marketing and development expenses, with disbursements tied to achieving specific milestones outlined in the roadmap.</Typography>
        <Typography variant="body1" style={{}}>10% is reserved for a burn goal, to be executed post-launch to help manage supply.</Typography>
        <Typography variant="body1" style={{}}>25% is committed to a liquidity pool, ensuring stability and facilitating transactions.</Typography>
        <Typography variant="body1" style={{}}>50% of tokens are available during the presale phase. Any remaining tokens after the presale will either be added to the liquidity pool or burned, based on a community vote.</Typography>
      </Paper>
    </Grid>
  );
}

export default InfoContainer;
