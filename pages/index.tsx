import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Demo() {
  return (
    <Box
    >
      <Box
        component="h1"
        sx={{
          height: 50,
        }}
      >
        <Typography fontSize={24} textAlign="center">San Shop</Typography>
      </Box>
      <Box>
        <Typography>Review your order</Typography>
        <Typography>Please check your order below</Typography>
        <Typography>Your details</Typography>
        <Typography>John Doe</Typography>
        <Typography>+44 7812341234</Typography>
        <Typography>102 Test Building, Blah Road, London, E1 ZZZ</Typography>
        <Typography>Payment</Typography>
        <Typography>Direct Debit: £45/month (£40 Product + £5 Subscription)</Typography>
        <Typography>Payment date: 1st of every month</Typography>
        <Typography>Your Order</Typography>
        <Typography>£40</Typography>
        <Typography>The Lorem Ipsum Device</Typography>
        <Typography>Own your own Lorem Ipsum (36 months)</Typography>
        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Typography>

        <Typography>£10 £5</Typography>
        <Typography>Subscription</Typography>
        <Typography>Your monthly subscription (36 months)</Typography>

        <Typography>I have read all the terms and conditions</Typography>
        <Button>continue</Button>
      </Box>

    </Box>
  );
}
