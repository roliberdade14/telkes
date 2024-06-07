import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import iguana from '../../imagem/image-73118-800.jpg'

export default function ImgMediaCard({user}) {

    console.log(user.phone);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={iguana}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}<br/>
          {user.phone}<br/>
          {user.website}<br/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartilhar</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    
  );
}
