import { Container, Stack } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import Catwin from '../images/catwin.jpg'
import CardButton from '../CardButton/CardButton';

const Typo=styled(Typography)({
    marginTop:'100px',
    marginBottom:'80px',
    fontSize: '30px',
    fontFamily: 'Berkshire Swash, cursive',
    color:'#black',
    textAlign:'center'

})

function Events() {
  return (
    <React.Fragment>
        <Container maxWidth='lg'>
        <Typo>Events</Typo>


        <Stack direction="row" spacing={12}>
        <Card sx={{ maxWidth: 345 }} elevation={8}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ Catwin } 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardButton />
      </CardActions>
    </Card>



    <Card sx={{ maxWidth: 345 }}  elevation={8}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ Catwin }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardButton />
      </CardActions>
    </Card>



    <Card sx={{ maxWidth: 345 }}  elevation={8}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ Catwin }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <CardButton />
      </CardActions>
    </Card>
        </Stack>
     
   </Container>
    </React.Fragment>
    
  )
}

export default Events