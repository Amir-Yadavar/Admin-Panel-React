import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardBox({title,name}) {
  return (
    <>
      <Card sx={{ minWidth: 275 , maxWidth:370 , m:2}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Messages For Admin
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{color:"#aaaafe"}}>
            {name}
          </Typography>
          <Typography variant="body2" style={{textAlign:"justify"}}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, minima!
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
