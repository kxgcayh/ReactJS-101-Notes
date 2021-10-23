import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { red, yellow, green, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  card: {
    border: note => {
      if (note.category === 'work') {
        return '1px solid red';
      }
    }
  },
  avatar: {
    backgroundColor: note => {
      if (note.category === 'work') {
        return red[700];
      }
      if (note.category === 'money') {
        return yellow[500];
      }
      if (note.category === 'todos') {
        return green[500];
      }
      return blue[500];
    }
  }
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={3} className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              aria-label='settings'
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
