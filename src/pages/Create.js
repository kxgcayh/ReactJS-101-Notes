import React, { useState } from 'react';
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  btn: {
    fontSize: 20,
    '&:hover': {
      backgroundColor: 'red'
    }
  },
  title: {
    paddingTop: 20,
    marginBottom: 20
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [category, setCategory] = useState('todos');

  const handleSubmit = e => {
    e.preventDefault();
    setTitleError(false);
    setDetailError(false);

    if (title === '') {
      setTitleError(true);
    }

    if (detail === '') {
      setDetailError(true);
    }

    if (title && detail && category) {
      console.log(title, detail, category);
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, detail, category })
      }).then(history.push('/'));
    }
  };

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          id='title'
          onChange={e => setTitle(e.target.value)}
          className={classes.field}
          label='Note title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          id='detail'
          onChange={e => setDetail(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          minRows={4}
          fullWidth
          required
          error={detailError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category:</FormLabel>
          <RadioGroup
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label='Money' value='money' />
            <FormControlLabel control={<Radio />} label='Todos' value='todos' />
            <FormControlLabel
              control={<Radio />}
              label='Reminder'
              value='reminder'
            />
            <FormControlLabel control={<Radio />} label='Works' value='work' />
          </RadioGroup>
        </FormControl>
        <Button
          className={classes.btn}
          type='submit'
          color='primary'
          variant='contained'
          endIcon={<SendIcon />}
        >
          SUBMIT
        </Button>
      </form>
    </Container>
  );
}
