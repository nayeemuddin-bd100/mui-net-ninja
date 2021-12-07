import AddReactionIcon from '@mui/icons-material/AddReaction';
import SendIcon from "@mui/icons-material/Send";
import { Button, Container, Typography } from '@mui/material';

export default function Create() {
  return (
    <Container>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Create New Page
      </Typography>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<AddReactionIcon color="success" />}
        endIcon={<SendIcon/>}
      >
        {" "}
        Submit{" "}
      </Button>

      {/* Icons
      <br/>
      <AddReactionIcon color='success'/>
      <AddReactionIcon color='warning' fontSize='small' />
      <AddReactionIcon /> */}
    </Container>
  );
}
