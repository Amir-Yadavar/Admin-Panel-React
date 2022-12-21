import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './Mailcard.css'

export default function MailCard({img , title,id,onRemove }) {
  const deleteHandler =()=>{
    return onRemove(id)
  }
  
    return (
    <Card sx={{ maxWidth: 320 }} className='card-mail'>
      <CardMedia
        component="img"
        height="140!important"
        image={img}
        className='card-mail-img'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis illo excepturi accusamus dolorem rem autem eaque consequatur dolores?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteHandler}>Delete</Button>
      </CardActions>
    </Card>
  );
}
