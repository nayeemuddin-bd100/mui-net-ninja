import { Button, Container, Typography } from '@mui/material';
import React from 'react';

export default function Create() {
  return (
    <Container >
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create New Page 
      </Typography>

      <Button type="submit" variant='contained' color="primary" > Submit </Button>
    </Container>
  );
}
