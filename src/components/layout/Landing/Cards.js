import React from 'react';
import { Card, Button } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    width: '70%',
    marginLeft: '25%',
    marginTop: '260px',
    display: 'flex',
    alignSelf: 'center',
    borderRadius: '30px'
  }
});

const Cards = () => {
  const classes = useStyles();

  return (
    <div className='card-wrapper'>
      <Card
        // className="root-card"
        id='test-card'
        // className={classes.root}
      >
        <CardContent className='card-content1'>
          <Typography variant='h3'>12,154</Typography>
          <Typography
            variant='body1'
            style={{ width: 200, textAlign: 'center', marginTop: '60px' }}
          >
            People have already joined, jump in !
          </Typography>
          <Button variant='contained' color='primary' className='sign-fb-btn'>
            <FacebookIcon style={{ marginRight: 10 }} /> Sign in via Facebook
          </Button>
          <Typography
            variant='caption'
            // className="text-youre"
            id='text-youre'
          >
            We never post on your behalf
          </Typography>
        </CardContent>
        <CardContent className='card-content2'>
          <Typography
            variant='h6'
            style={{ width: 200, textAlign: 'center', marginTop: '40px' }}
          >
            Sign up by answering a few questions:
          </Typography>
          <Typography
            variant='body1'
            // className="text-youre"
            id='text-youre'
          >
            You're
          </Typography>
          <Button variant='contained' className='btn-malefemale'>
            Male
          </Button>
          <Button variant='contained' className='btn-malefemale'>
            Female
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
