import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CssBaseline, Button, Container, Paper, Card, CardContent, TextField, CardActions, Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 2),
    padding: theme.spacing(3, 2),
  },
  textField: {
    margin: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [num, setNum] = useState(1);
  const [wasm, setWasm] = useState(null);

  useEffect(() => {
    import('prime-judger').then(_wasm => {
      setWasm(_wasm);
    })
  }, [])

  const onClick = (e) => {
    e.preventDefault();
    const startTime = performance.now();
    wasm.is_prime(num);
    const endTime = performance.now();
    console.log('time to calcurate: ', endTime - startTime);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="md">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h3">
          PRIME NUMBER CHECKER
          </Typography>
          <Card>
            <CardContent>
              <TextField
                id="outlined-number"
                label="Number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                variant="outlined"
              />
            </CardContent>
            <CardActions>
              {wasm ? (<Button size="medium" disabled={num < 1 || num > 18446744073709551615 || !wasm} onClick={(e) => onClick(e)}>IS THIS A PRIME NUMBER?</Button>) : ('')}
            </CardActions>
          </Card>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
