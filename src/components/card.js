import React from 'react';
import './card.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


// /**
// * @author
// * @function CardOne
// **/
// const useStyles = makeStyles((theme) => ({

// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 290,
    width: 270,
  },
  control: {
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(5),

  },
}));
export default function CardOne() {
  const [spacing, setSpacing] = React.useState(4);
  const classes = useStyles();
  const cardimage = [
    { img: "https://gbc-cdn-public-media.azureedge.net/img16246.1426x713.jpg" },
    { img: "https://gbc-cdn-public-media.azureedge.net/img16246.1426x713.jpg" },

  ]

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  return (
    <React.Fragment>
      <div className="root1">
        <Grid container className={classes.root} spacing={2}>
          <Grid container justify="center" spacing={spacing}>
            {
              cardimage.map((card) => (
                <Grid item key={card} >
                  {/* <Paper className={classes.paper} style={data.src}/>    */}
                  <Card className={classes.paper}>
                    <CardMedia
                      image={card.img}
                    />
                  </Card>
                </Grid>


              ))}
          </Grid>
        </Grid>
      </div>

    </React.Fragment>

  );
}






// const CardOne = (props) => {
//   return (
//     <React.Fragment>
//       <div className="root">
//         <Grid container spacing={3}>
//           <Grid item xs={3}>
//             <Paper className="paper">xs=3</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className="paper">xs=3</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className="paper">xs=3</Paper>
//           </Grid>
//           <Grid item xs={3}>
//             <Paper className="paper">xs=3</Paper>
//           </Grid>
//         </Grid>
//       </div>

//     </React.Fragment>

//   )

// }
