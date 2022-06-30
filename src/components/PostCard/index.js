import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, CardActions, Typography, Avatar } from '@mui/material';
import './style.css';
const useStyles = makeStyles({
  root: {
    padding: 1,
  },
});

function PostCard({ post }) {
  const classes = useStyles();
  
  return (
   <Card className={classes.root}>
     <CardHeader
       avatar={<Avatar src={post.author.avatar}/>}
       title={<Typography variant="h6">{post.author.name}</Typography>}
       subheader={
         <div className="subheader">Aqui
           <Typography variant="caption">
             { post.author.name }
           </Typography>
           <Typography variant="subtitle2">
             { post.author.name }
           </Typography>
         </div>
       }
     />
     <CardContent>

     </CardContent>
     <CardActions>

     </CardActions>
   </Card>
  )
}  

export default PostCard;