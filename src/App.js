import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  ThemeProvider,
  Grid,
  Paper,
  TextField,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  LinearProgress,
  Divider,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ScoreIcon from "@material-ui/icons/Score";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ExtensionIcon from "@material-ui/icons/Extension";
import TimerIcon from "@material-ui/icons/Timer";

class App extends Component {
  state = {
    username: "",
    password: "",
    userVerified: true,
  };

  handleLoginInputs = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  handleUserVerification = (newState) => {
    this.setState({ userVerified: newState });
  };

  render() {
    const { username, password, userVerified } = this.state;

    return (
      <ThemeProvider>
        {!userVerified && (
          <LoginPage
            username={username}
            password={password}
            handleLoginInputs={this.handleLoginInputs}
            handleUserVerification={this.handleUserVerification}
          />
        )}
        {userVerified && (
          <>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Quarantine Puzzle</Typography>
              </Toolbar>
            </AppBar>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <MainPage />
                {/* <GameChoicePage /> */}
                {/* <PuzzlePage /> */}
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </>
        )}
      </ThemeProvider>
    );
  }
}

const LoginPage = (props) => {
  const {
    username,
    password,
    handleLoginInputs,
    handleUserVerification,
  } = props;

  return (
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Paper elevation={3}>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                defaultValue={username}
                onChange={() => handleLoginInputs("username")}
              />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                defaultValue={password}
                onChange={() => handleLoginInputs("password")}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUserVerification(true)}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

const MainPage = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PlayCircleOutlineIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Play</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" size="small">
                Go puzzle
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PeopleOutlineIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Parties</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary" size="small">
                Join
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ScoreIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">10,459</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="primary">
                3rd most points
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">All time leaderboard</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ScoreIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">2,345</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="primary">
                10th most points
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Weekly leaderboard</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3}>
          <Typography variant="h6">hej</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={3}>
          <Typography variant="h6">hej</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

const GameChoicePage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PersonOutlineIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Play alone</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                Start a game
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PeopleOutlineIcon />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Play with friends</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                Set up a party
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={2}></Grid>

      <Grid item xs={0}></Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ExtensionIcon style={{ color: "green" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Easy</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                Choose
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ExtensionIcon style={{ color: "yellow" }} />
              <ExtensionIcon style={{ color: "yellow" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Medium</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                Choose
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ExtensionIcon style={{ color: "red" }} />
              <ExtensionIcon style={{ color: "red" }} />
              <ExtensionIcon style={{ color: "red" }} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">Hard</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" color="primary">
                Choose
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={0}></Grid>
    </Grid>
  );
};

const PuzzlePage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper elevation={3}>
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="subtitle1">Time</Typography>
              <Typography variant="h5">10:30</Typography>
              <TimerIcon />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs={5}>
              <Typography variant="subtitle1">Stages completed</Typography>
              <Typography variant="h5">2 / 5</Typography>
              <LinearProgress variant="determinate" value={40} />
              hej
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper elevation={3}>
          <Typography variant="subtitle1">Party members</Typography>
          <Grid container>
            <Grid item xs={3}>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>EN</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Erik Näsberg"
                    secondary="nasberg1053"
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>AT</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Ali Taei" secondary="aliman23" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>AT</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Ali Taei" secondary="aliman23" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={3}>
              <List dense>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>AT</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Ali Taei" secondary="aliman23" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Typography variant="h5">Hej</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );
};

export default App;
