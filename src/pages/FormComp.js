import { Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';

function FormComp() {
  return <Container>
      <Typography variant="h6" color='GrayText'> Create a new Note </Typography>
      <form>
        <TextField label="Name" variant="outlined" color='primary' fullWidth/>

      </form>

      <Button variant="contained" color='secondary'> Submit</Button>


  </Container>;
}

export default FormComp;
