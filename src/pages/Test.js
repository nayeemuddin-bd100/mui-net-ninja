import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles({
    btn: {
        background:'red',
        color:'black',
        "&:hover":{
            background: 'black'
        }

    }
})

function Test() {
    const classes = useStyles()

  return <div>

<Button className={classes.btn}> Test Button </Button>

  </div>;
}

export default Test;
