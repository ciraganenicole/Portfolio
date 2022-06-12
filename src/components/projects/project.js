import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';


const Project = (props) =>{

  return (
    
    <Card sx={{ maxWidth: 320 }} onClick={()=>props.handleClick(props.id)} style={{ height: "390px"}} className="bg-indigo-900">
      <CardActionArea style={{ position: "static"}}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
          className="shadow-lg shadow-indigo-500/50"
          style={{ height: "150px"}}
        />
        <CardContent className="p-20 text-center bg-indigo-900 text-white font-medium">
          <Typography gutterBottom variant="h5" component="div">
            {props.titre}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ height: "80px"}}>
            <ul className="flex flex-wrap mt-8 justify-center">
               {props.tech.map((ftechno)=>(
                 <li className=" border-2 rounded-lg p-1 mr-2 mt-2 text-white">{ftechno}</li>
             ))}
            </ul>
          </Typography>
        </CardContent>
        <CardActions className="justify-center see transition duration-200 ease-out hover:ease-in bg-indigo-900" style={{ height: "70px"}}>
        <Button 
        size="small"
        variant="contained"
        type="button"
        value="See live"
        onClick={()=>props.handleClick(props.id)}
        style={{ position: "static"}}
        >
          See project
        </Button>
      </CardActions>
      </CardActionArea>
    </Card>
  );
}
export default Project