import {
    Card,
    CardContent,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";
import React from "react";

function GridComp() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={3} xs={12} sm={4}>
          {" "}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit facilis nihil
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          {" "}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit facilis nihil
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          {" "}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit facilis nihil
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          {" "}
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit facilis nihil
          </Typography>
        </Grid>
      </Grid>

      {/* Grid with card */}

      <Grid
        style={{ marginTop: "30px" }}
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={3} xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Text Heading
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Text Heading
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Text Heading
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3} xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Text Heading
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center',marginTop: "20px",  }}>
        <Paper elevation={24} style={{  width: "50%" , textAlign: 'center'}}>
          Paper component
        </Paper>
      </div>
    </Container>
  );
}

export default GridComp;
