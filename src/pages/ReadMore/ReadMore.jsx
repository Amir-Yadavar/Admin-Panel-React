import React from "react";
import "./ReadMore.css";
import { Alert, Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function ReadMore() {
  const [value, setValue] = React.useState(4);
  const [value2, setValue2] = React.useState(2);

  return (
    <section className="container-read-more">
      <h2>Read More</h2>
      <Alert severity="info" className="alert-readmore">
        Read the reports carefully because there is a possibility of changes
      </Alert>
      <section>
        <div>
          <h2>Factory Manager</h2>
          <div>
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          non consequuntur delectus. Ea beatae quae perspiciatis provident
          repudiandae dolor soluta corrupti mollitia quaerat quo, hic tempore
          tempora nesciunt expedita! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Consectetur quibusdam in doloribus voluptatum
          mollitia, voluptates perspiciatis, iusto ullam cupiditate iure esse
          officia harum magni debitis fuga modi itaque laudantium ut. Eos autem
          quia esse cum fugiat. Libero vitae dolorem sed, veniam laudantium
          repellendus harum quasi beatae architecto nam magnam debitis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          non consequuntur delectus. Ea beatae quae perspiciatis provident
          repudiandae dolor soluta corrupti mollitia quaerat quo, hic tempore
          tempora nesciunt expedita! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Consectetur quibusdam in doloribus voluptatum
          mollitia, voluptates 
        </p>
        <Button variant="contained">Ok , I read</Button>
      </section>
      <section>
        <div>
          <h2>Human resources</h2>
          <div>
            <Typography component="legend"></Typography>
            <Rating
              name="simple-controlled"
              value={value2}
              onChange={(event, newValue) => {
                setValue2(newValue);
              }}
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          non consequuntur delectus. Ea beatae quae perspiciatis provident
          repudiandae dolor soluta corrupti mollitia quaerat quo, hic tempore
          tempora nesciunt expedita! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Consectetur quibusdam in doloribus voluptatum
          mollitia, voluptates perspiciatis, iusto ullam cupiditate iure esse
          officia harum magni debitis fuga modi itaque laudantium ut. Eos autem
          quia esse cum fugiat. Libero vitae dolorem sed, veniam laudantium
          repellendus harum quasi beatae architecto nam magnam debitis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus
          non consequuntur delectus. Ea beatae quae perspiciatis provident
          re
          
        </p>
        <Button variant="contained">Ok , I read</Button>
      </section>
    </section>
  );
}
