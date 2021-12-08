import AddReactionIcon from "@mui/icons-material/AddReaction";
import SendIcon from "@mui/icons-material/Send";
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles({}) // create custom style by using this hooks
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    marginBottom:20
  }
});

export default function Create() {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        gutterBottom
      >
        Create New Page
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddReactionIcon color="success" />}
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
      <br />
      <br />
      <br />
      {/* Icons
      <br/>
      <AddReactionIcon color='success' fontSize='small | large' />
      */}

      {/* Custom hooks(makeStyles) provided by mui */}
      <Button className={classes.root}>
        {" "}
        Custom styles with mui hooks api
      </Button>

      {/* Testing override default theme or styles */}
      <Typography color="secondary"> changed secondary text color to red</Typography>
    </Container>
  );
}
